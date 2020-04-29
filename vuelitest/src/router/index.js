import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import Work from '@/components/Work'
import Htop from '@/components/Htop'
import DataList from '@/components/DataList'
import Sort from '@/components/Sort'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/page',
            name: 'Page',
            component: Page
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/Htop',
            name: 'Htop',
            component: Htop
        },
        {
            path: '/getdata',
            name: 'DataList',
            component: DataList
        },
        {
            path: '/sort',
            name: 'Sort',
            component: Sort
        }
    ]
})