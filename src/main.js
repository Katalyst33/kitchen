
import './scss/bulma.scss';


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  ScrollAnimation from  './directives/scrollanimation'

import VueAwesomeSwiper from 'vue-awesome-swiper'



import NavBar from "./components/commons/NavBar";
import FooterArea from "./components/commons/FooterArea";


import 'swiper/dist/css/swiper.css'

Vue.directive('scrollanimation', ScrollAnimation);
Vue.component('NavBar', NavBar);
Vue.component('FooterArea', FooterArea);

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, /* { default global options } */);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



