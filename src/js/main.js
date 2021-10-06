import Vue from 'vue';

import bonsai from './components/Bonsai.vue';
import usecases from './components/Usecases.vue';

Vue.component('bonsai', bonsai);
Vue.component('usecases', usecases);

const app = new Vue({
	el: '#app',
});
