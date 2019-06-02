import Vue from 'vue'
import VueRouter from 'vue-router'
import Qrcode from './components/Qrcode'
import App from "./App";
import Webcam from "./components/Webcam";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Qrcode},
    {path: '/photo', component: Webcam},
];

const router = new VueRouter({
    routes
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
