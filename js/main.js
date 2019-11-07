'use strict'

import theRouter from './routes.js';
import appHeader from './pages/app-header.cmp.js';
import appFooter from './pages/app-footer.cmp.js';


// filter for email!
Vue.filter('snippet',function(value){
    return value.slice(0,50);
  });

new Vue({
    router: theRouter, 
    el:'#appsus-app',
    template: `
        <section>
            <app-header></app-header>
            <div class="main-container">
            <router-view></router-view>
            <app-footer></app-footer>
            </div>
        </section>
    `,
    components: {
        appHeader,
        appFooter
    }
})