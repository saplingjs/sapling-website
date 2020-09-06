import Vue from 'vue';

Vue.component("bonsai", require("./components/Bonsai.vue").default);
Vue.component("usecases", require("./components/Usecases.vue").default);

const app = new Vue({
	el: "#app"
});
