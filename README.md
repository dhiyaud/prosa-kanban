# Kanban Prosa

## Tech Stack

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vue Router](https://router.vuejs.org/) - Vue Router is the official router for Vue.js
- [Vuex](https://vuex.vuejs.org/) - Vuex is a state management pattern + library for Vue.js applications
- [Vuetify](https://vuetifyjs.com/en/) - Vuetify is a Vue UI Library with beautifully handcrafted Material Components 
- [vee-validate](https://logaretm.github.io/vee-validate/) - Template Based Form Validation Framework for Vue.js
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable) - Vue component or directive allowing drag-and-drop and synchronization with view model array.

## Application Structure

    .
    ├── dist                    # Compiled files
    ├── public                  # Public assets
    ├── src                     # Source of application codes
    │   ├── api                 # API mapping
    │   ├── assets              # Dynamic assets managed by webpack 
    │   ├── components          # Reusable Vue Components
    │   ├── plugins             # Vue plugins
    │   ├── router              # Routing
    │   ├── store               # Vuex
    │   └── views               # Vue page components
    └── README.md

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
