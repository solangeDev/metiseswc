import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// import Vue from "vue";
// import wrap from "@vue/web-component-wrapper";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// import App from "./App.vue";

// const wrappedElement = wrap(Vue, App);

// window.customElements.define("wc-leftbar", wrappedElement);
