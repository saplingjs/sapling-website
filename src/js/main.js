import Vue from 'vue';

import bonsai from './components/Bonsai.vue';
import demo from './components/Demo.vue';

Vue.component('bonsai', bonsai);
Vue.component('demo', demo);

new Vue({
	el: '#app',
});
