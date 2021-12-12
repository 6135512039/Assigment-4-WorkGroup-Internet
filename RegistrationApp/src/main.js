import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import vuetify from './plugins/vuetify'
import "semantic-ui-css/semantic.css"
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')