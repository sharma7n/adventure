import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue'


const router = new VueRouter({
  routes: [
    { path: "/home", component: { template: "<div>foo</div>" } },
    { path: "/other", component: { template: "<div>bar</div>" } },
  ]
});

new Vue({
  el: '#root',
  router: router,
  render: h => h(App)
})
