'use strict'

import homePage from './pages/home.cmp.js';
import emailApp from '../js/apps/email/email-app.cmp.js';
import missKeep from '../js/apps/keep/keep-app.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
      path:'/mail',
      component: emailApp
    },
    {
        path: '/keep',
        component: missKeep
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
   
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;