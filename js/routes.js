'use strict'

import homePage from './pages/home.cmp.js';
import emailApp from '../js/apps/email/email-app.cmp.js';
import missKeep from '../js/apps/keep/keep-app.cmp.js';
import emailDetails from '../js/apps/email/cmps/email-details.cmp.js'

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
    { path: '/mail/:theMailId', component: emailDetails }

    // {
    //     path: '/book',
    //     component: bookApp
    // },
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;