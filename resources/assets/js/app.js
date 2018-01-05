import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: resolve => require(['./components/index.vue'], resolve),
        name: 'root'
    }, {
        path: '/users',
        component: resolve => require(['./components/User/index.vue'], resolve),
        name: 'user.index'
    }, {
        path: '*',
        redirect: '/'
    }]
})

Vue.http.options.root = 'http://localhost:8000/api'
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if (request.after) {
            request.after.call(this, response)
        }
    })
})

const app = new Vue({
    el: '#app',
    router: router,
    data () {
        return {
            loading: false
        }
    }
})
