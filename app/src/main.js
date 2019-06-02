import Vue from 'vue'
import VueRouter from 'vue-router'
import Qrcode from './components/Qrcode'
import App from "./App";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Qrcode},
    {path: '/photo', component: {template: '<div>kejfkjzegf</div>'}},
];

const router = new VueRouter({
    routes
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
