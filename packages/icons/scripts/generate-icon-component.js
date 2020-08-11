const path = require('path')
const os = require('os')
const glob = require('fast-glob')
const { existsSync, readFileSync, writeFile, writeFileSync } = require('fs-extra')
const { camelCase, camelCaseTransformMerge } = require('camel-case')

const tasks = []

const libPath = path.resolve(process.cwd(), '../../', 'node_modules/tabler-icons/icons/')
const distPath = path.resolve(process.cwd(), './src/')
const entryPath = path.resolve(process.cwd(), './')

const handleFileName = name => camelCase(name, { transform: camelCaseTransformMerge })

const vueTemplate = svg => `<template>
<div class="icon-wrap">
${ svg.split(os.EOL).map(i => '  ' + i).join(os.EOL) }
  <span>
    <slot></slot>
  </span>
</div>
</template>

<script setup="props, { emit }" lang="ts">
export default {}
</script>

<style lang="scss">
.icon-wrap {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  vertical-align: baseline;

  svg ~ span {
    margin-left: 2px;
  }
}
</style>`

const generateVueSFC = async (sourcePath, name) => {
  const content = await readFileSync(sourcePath, 'utf8')
  // const svg = content.replace(/(?<=\<svg[^\>]*(width|height)=")\d+(?=".*\>)/g, '1em').trim()
  const svg = content.replace('width="24" height="24"', 'width="1em" height="1em"').trim()

  return new Promise((resolve) => {
    const compoentName = name.replace('.svg', '.vue')
    const componentPath = path.resolve(distPath, compoentName)

    writeFile(componentPath, vueTemplate(svg), 'utf-8', err => {
      if (err) throw err
      resolve(`export { default as ${ handleFileName(name.replace('.svg', '')) } } from './src/${ compoentName }'`)
    })
  })
}

if (!existsSync(libPath)) {
  throw new Error('Should install tabler-icons before invoke the script.\n')
}

const files = glob.sync(`${ libPath }/*.svg`, { objectMode: true })

files.forEach(file => tasks.push(generateVueSFC(file.path, file.name)))

Promise.all(tasks).then(async res => {
  await writeFileSync(
    path.resolve(entryPath, './index.ts'),
    res.join(os.EOL),
    'utf-8'
  )
})
