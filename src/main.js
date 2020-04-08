import Vue from 'vue'
import App from './App.vue'

import "../node_modules/cloudinary-video-player/dist/cld-video-player.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
