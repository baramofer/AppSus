'use strict'

// import bookApp from './cmps/book-app.cmp.js';
import homePage from '../pages/home.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //   path:'/mail',
    //   component: misterEmail
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/keep',
    //     component: missKeep
    // },
   
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;