import Vue from 'vue';
import Vuex from 'vuex'
import rent from './modules/rent'

//实例vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rent
  }
})
