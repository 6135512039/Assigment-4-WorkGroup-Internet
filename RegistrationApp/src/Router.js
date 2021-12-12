import vue from 'vue'
import Router from 'vue-router'
import Tasks from './views/Tasks.vue'
import New from './views/New.vue'
import success from './views/success.vue'



vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path:'/',
            redirect: '/tasks'
        },
        {
            path: '/tasks',
            name:'tasks',
            component: Tasks
        },
        {
            path: '/tasks/new',
            name:'new-tasks',
            component: New
        },
                {
            path: '/tasks/success',
            name:'success',
            component: success
        }
    ]

})