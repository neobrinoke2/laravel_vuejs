import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('./components/ExampleComponent.vue'),
        name: 'root'
    }, {
        path: '/a',
        component: require('./components/PageA.vue'),
        name: 'a'
    }, {
        path: '/b',
        component: require('./components/PageB.vue'),
        name: 'b'
    }, {
        path: '/c',
        component: require('./components/PageC.vue'),
        name: 'c'
    }, {
        path: '*',
        redirect: '/'
    }]
})

Vue.component('test', require('./components/ExampleComponent.vue'))

const app = new Vue({
    el: '#app',
    router: router
})
