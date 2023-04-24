import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createBootstrap } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap and Bootstrap-Vue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/main.css'

//const app = createApp(App)

// Make Bootstrap-Vue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)

const bootstrap = createBootstrap();
app.use(bootstrap);

//app.mount('#app')
createApp(App).mount('#app')