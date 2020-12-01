const path = require('path')
const fs = require('fs-extra')
const glob = require('fast-glob')
const { pascalCase, pascalCaseTransformMerge } = require('pascal-case')

const ignoreIcons = []

const tasks = []

const libPath = path.resolve(process.cwd(), '../../', 'node_modules/bootstrap-icons/icons/')
const distPath = path.resolve(process.cwd(), './src/')
const entryPath = path.resolve(process.cwd(), './index.js')
const typesPath = path.resolve(process.cwd(), './types/')
const rollupEntriesPath = path.resolve(process.cwd(), './entries.js')

const pascalCaseName = name => pascalCase(name,{ transform: pascalCaseTransformMerge })

const vueTemplate = svg => 
  "<template>\n" +
    `${ svg.split('\n').map(i => `  ${ i }`).join('\n') }` + '\n' +
  "</template>"

const entriesTemplate = (enties) => enties.map(e => 
  `export { default as ${ pascalCaseName(e.name) } } from '${ e.path }'`
).join('\n')

const rollupEntriesTemplate = (enties) => 
  `export default ${JSON.stringify(enties, null, 2)}`

const typesTemplate = (comps) => 
  "declare module '@comz/icons' {\n" +
  "  import { defineComponent } from 'vue'\n" +
  "  type Vue = typeof defineComponent\n" + comps.map(c => 
  `  export const ${ pascalCaseName(c) }: Vue`).join('\n') + '\n' +
  "}"

const generateVueSFC = (sourcePath, name) => {
  const content = fs.readFileSync(sourcePath, 'utf8')
  const svg = content.replace(/\s+class=".+?"/, '').trim()

  return new Promise((resolve) => {
    const compoentName = `${name}.vue`

    fs.writeFile(
      path.resolve(distPath, compoentName),
      vueTemplate(svg),
      'utf-8',
      err => {
        if (err) throw err
        resolve({
          name,
          path: `./src/${ compoentName }`
        })
      }
    )
  })
}



if (!fs.existsSync(libPath)) {
  throw new Error('Should install tabler-icons before invoke the script.\n')
}

fs.ensureDirSync(distPath)
fs.ensureDirSync(typesPath)

const files = glob.sync(`${ libPath }/*.svg`, { objectMode: true })


files.forEach(file => {
  const name = file.name.replace('.svg', '')
  if (!ignoreIcons.includes(name)) {
    tasks.push(generateVueSFC(file.path, name))
  }
})

Promise.all(tasks).then(res => {
  const enties = []
  const rollupEntries = {}
  const types = []

  res.forEach(file => {
    enties.push(file)
    rollupEntries[file.name] = file.path
    types.push(file.name)
  })

  fs.writeFileSync(entryPath, entriesTemplate(enties), 'utf-8')
  fs.writeFileSync(rollupEntriesPath, rollupEntriesTemplate(rollupEntries), 'utf-8')
  fs.writeFileSync(path.resolve(typesPath, 'index.d.ts'), typesTemplate(types), 'utf-8')
})
