import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
        
            component: HelloWorld
        },
        {
            path: '/main',

            component: Form
        }
    ]
})
