import Vue from 'vue'
import Router from 'vue-router'
import Thanks from './Thanks'
import Hello from './Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: Hello
        },
        {
            path: '/thanks',
            name: 'thanks',
            component: Thanks
        }
    ]
})
