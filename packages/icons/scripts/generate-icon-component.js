const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const glob = require('fast-glob')
const { pascalCase, pascalCaseTransformMerge } = require('pascal-case')

const ignoreIcons = []

const tasks = []

const libPath = path.resolve(process.cwd(), '../../', 'node_modules/tabler-icons/icons/')
const distPath = path.resolve(process.cwd(), './src/')
const entryPath = path.resolve(process.cwd(), './index.js')
const rollupEntriesPath = path.resolve(process.cwd(), './entries.js')

const handleFileName = name => pascalCase(name, { transform: pascalCaseTransformMerge })

const vueTemplate = svg => `<template>
${ svg.split(os.EOL).map(i => '  ' + i).join(os.EOL) }
</template>`

const generateVueSFC = async (sourcePath, name) => {
  const content = await fs.readFileSync(sourcePath, 'utf8')
  const svg = content.replace('width="24" height="24"', 'width="1em" height="1em"').trim()

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

const files = glob.sync(`${ libPath }/*.svg`, { objectMode: true })


files.forEach(file => {
  const name = file.name.replace('.svg', '')
  if (!ignoreIcons.includes(name)) {
    tasks.push(generateVueSFC(file.path, name))
  }
})

Promise.all(tasks).then(async res => {
  const arr1 = []
  const arr2 = {}

  res.forEach(file => {
    arr1.push(`export { default as ${ handleFileName(file.name) } } from '${ file.path }'`)
    arr2[file.name] = file.path
  })
  
  await fs.writeFileSync(entryPath, arr1.join(os.EOL), 'utf-8')
  await fs.writeFileSync(rollupEntriesPath, `export default ${JSON.stringify(arr2, null, 2)}`, 'utf-8')
})
