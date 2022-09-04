# vue 3 + Typescript + Vite 3.0 Boilerplate
Lightweight and quick starter Pack

# :bulb: Requirement
- Over node 16

# :newspaper: Tack stack
- Vue 3
- Typescript
- Vite 3.0

# :orange_book: libraries
- sass/scss
- [Tailwind](https://tailwindcss.com/)
- eslint
- [vitest](): Unit test with vite
- Cypress: E2E test
- [Husky 8](https://github.com/typicode/husky)
- [carbon icons](https://carbondesignsystem.com/guidelines/icons/library/): Icons
- [yup](https://www.npmjs.com/package/yup): Form Validate

## CDN 
- [material icon]('https://fonts.google.com/icons): Icons

## Vue Plugins
- [vue-router-v4](https://router.vuejs.org/): Route system
- [pinia](https://pinia.vuejs.org/): State management
- [vue-i18n](https://kazupon.github.io/vue-i18n/): Internationalization
- [Vite Pwa plugin](https://vite-plugin-pwa.netlify.app/): PWA
- [vue-use](https://github.com/antfu/vueuse): Provide useful utilities to vue project
- [vueuse/head](https://github.com/vueuse/head): Control head meta

[//]: # (- [vee-validate]&#40;https://vee-validate.logaretm.com/v4/&#41;: Form Validate)

## Considerable(recommended) libraries
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages): File based pages
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components): make components to global component automatically 
- [animate.css](): class based animation collection

# :rocket: Getting Started
## Dev
```shell
yarn dev
```
## Build
```shell
yarn build
```
## Eslint
```
yarn eslint:fix
```
## Unit Test
```
yarn test
```
## Unit test with ui
```
yarn test:ui
```
## E2E test
```
yarn test:e2e
```

# :hammer: Default settings
## Vite
| key                 | value | Description                                                                                                             |
|---------------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| reactivityTransform | false | Because of errors in typescript, Do change it true <br>[link](https://vuejs.org/guide/extras/reactivity-transform.html) |

## Vite PWA
| key   | value             | Description |
|-------|-------------------|-------------|
| name  | Vue3-boilerplate  | Name of app |

## Tailwind
| key       | value | Description                               |
|-----------|-------|-------------------------------------------|
| darkmode  | class | Add class "tw-dark" to HTML for dark mode |
| prefix    | tw-   | Add "tw-" as prefix (tw-bg-red-500)       |
| important | True  | Make all tailwind with !important         |
### Color config
| key       | Description           |
|-----------|-----------------------|
| main      | main color for target |
| 100 ~ 900 | color stream          |
| text      | text color for target |
### Brand Colors
| key       | Description                          |
|-----------|--------------------------------------|
| primary   | primary                              |
| secondary | secondary                            |
| accent    | accent                               |
| positive  | use it for positive or success       |
| negative  | use it for negative, danger or error |
| info      | use if for information               |
| warning   | use if for warning                   |

# :file_folder: Directory Structure
```text
├─ node_modules/
├─ .husky                       # Contains husky config
├─ config/                      # Contains config files for project
├─ cypress/                     # Contains cypress test files
├─ public/
├─ scripts/                     # Contains script files
├─ src/
│  ├─ assets/                   # Assets for renderer.
│  ├─ components/               # Contain global components.
│  ├─ locales/                  # i18n, locales.
│  │   ├─ langs/                # supported language collection.
│  │   ├─ index.ts/             # i18n config.
│  ├─ router/                   # Router.
│  │   ├─ routes/               # Modularized routes.
│  │   ├─ index.ts/             # router config.
│  ├─ store/                    # Pinina or vue-store.
│  │   ├─ modules/              # Modularized store.
│  │   ├─ index.ts/             # store config.
│  ├─ styles/                   # Global Styles.
│  │   ├─ libs/                 # Contains styles for libraries 
│  ├─ types/                    # Contains types.
│  ├─ utils/                    # Contain utilities.
│  ├─ views/                    # Contain View pages.
│  ├─ main.ts                   # vue3 main file.
│  ├─ App.vue                   # App.vue.
├─ tests/                       # Contains test files
├─ index.html                   # Index html.
├─ .gitignore                   # gitignore.
├─ vite.config.ts               # Vite config.
├─ vitest.config.ts             # Vitest config.
├─ tsconfig.json                # Specific TypeScript config.
├─ .eslintrc.js                 # Eslint.
├─ .eslintignore                # eslint ignore config.
├─ package.json 
├─ tsconfig.node.json           # Root file TypeScript config generated by Vite CLI.
├─ README.md    
```

# Views and Routes 
```
├─ Layout/                      # Layout collection.
├─ Home/                        # index page.
├─ WhatEverName/                # WhatEverName link page
```

# :tada: Before start
## Remove
- views/examples
- router/routes
- "exampleRoutes" in index.ts router folder

# :postbox: Refs
- [vitesse](https://github.com/antfu/vitesse)
- [vueye](https://github.com/boussadjra/vueye)
- [vue2-admin-template](https://github.com/PanJiaChen/vue-element-admin)

# TODO
- Home page
  - Feature 
  - About
- Simple Example pages
- i18n for footer
- Documentation
