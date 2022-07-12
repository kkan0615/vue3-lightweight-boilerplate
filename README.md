# vue 3 + Typescript

# Tack stack
- Vue 3
- Typescript
- Vite

# libraries
- vue-router-v4
- pinia
- vue-i18n
- eslint
- sass/scss

# Directory Structure
```
├─ node_modules/
├─ public/
├─ scripts/                     # Scripts Collection
├─ src/
│  ├─ assets/                   # Assets for renderer.
│  ├─ components/               # Contain global components.
│  ├─ locales/                  # i18n, locaels.
│  │   ├─ langs/                # Lanuges collection.
│  │   ├─ index.ts/             # i18n config.
│  ├─ router/                   # Router.
│  │   ├─ routes/               # Modulized routes.
│  │   ├─ index.ts/             # router config.
│  ├─ store/                    # Pinina or vue-store.
│  │   ├─ modules/              # Modulized store.
│  │   ├─ index.ts/             # store config.
│  ├─ styles/                   # Global Styles.
│  ├─ types/                    # Types.
│  ├─ utils/                    # Contain utilites.
│  ├─ views/                    # Contain View pages.
│  ├─ main.ts                   # vue3 main file.
│  ├─ App.vue                   # App.vue.
├─ index.html                   # Index html.
├─ .gitignore                   # gitignore.
├─ vite.config.ts               # Vite confige.
├─ tsconfig.json                # Specific TypeScript config.
├─ .eslintrc.js                 # Eslint.
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

# Getting Started
## Dev
```shell
yarn dev
```
## Build
```shell
yarn build
```

# Refs

# Todo
- Unit test module
- cypress
- Add pinia, vuei18n
