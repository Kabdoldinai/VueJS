import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import News from './components/pages/News'
import Users from './components/pages/Users'
import Home from './components/pages/Home'



Vue.config.productionTip = false
Vue.use( BootstrapVue )
Vue.use( IconsPlugin )
Vue.use( VueRouter )

const routes = [

  {
    path: '/News',
    component: News
  },
  {
    path: '/Users',
    component: Users
  },


  {
    path: '/',
    component: Home
  }
];

const router = new VueRouter( {
  routes,
  mode: 'history'
} );


new Vue( {
  el: '#app',
  router,
  render: h => h( App ),
} ).$mount( '#app' )
