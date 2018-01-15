import Vue from 'vue'
import App from './Components/App.vue'
import Home from './Components/Home.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
