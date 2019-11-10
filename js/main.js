'use strict'

import theRouter from './routes.js';
import appHeader from './pages/app-header.cmp.js';
import appFooter from './pages/app-footer.cmp.js';
import userMsg from './apps/keep/user-msg.cmp.js';

Vue.filter('snippet',function(value){
    return value.slice(0,50);
  });

new Vue({
    router: theRouter, 
    el:'#appsus-app',
    template: `
        <section class="full-screen">
            <app-header></app-header>
            <div class="main-container">
                <user-msg></user-msg>
                <router-view></router-view>
                <app-footer></app-footer>
            </div>
        </section>
    `,
    components: {
        appHeader,
        appFooter,
        userMsg
    }
})