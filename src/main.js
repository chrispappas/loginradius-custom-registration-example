/* global LoginRadiusV2 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const lrOptions = {
  apiKey: process.env.VUE_APP_LR_API_KEY,
  hashTemplate: true,
  verificationUrl: window.location,
  formValidationMessage: true,
  sott: process.env.VUE_APP_LR_SOTT || '',
  debugMode: true,
};

window.LRObject = new LoginRadiusV2(lrOptions);

new Vue({
  render: h => h(App),
}).$mount('#app')
