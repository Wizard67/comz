# [WIP] COMZ

> A vue3 component library for `<script setup>` and `composition api` exploration.

## Packgaes

- [comz](./packages/comz) - components
- [@comz/icons](./packages/comz-icons) - icon components
- [@comz/style](./packages/comz-style) - component style
- [@comz/vca](./packages/comz-vca) - vue-composition-api utils

## Bootstrap Project

```bash
yarn install

yarn workspace @comz/icons build
yarn workspace @comz/style build
yarn workspace @comz/vca build
yarn workspace comz build

yarn workspace docs dev
```

Or you can run the `yarn build` script to build the above packages, but ignore it for now as a pending issue with vite will cause the build of the docs to fail.

## Some Problems

[Here is a record](https://github.com/Wizard67/comz/projects/1) of some problems during development and TODOs
