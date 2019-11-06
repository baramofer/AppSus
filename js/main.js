'use strict'

import theRouter from './routes.js';
import appHeader from '../pages/app-header.cmp.js';

new Vue({
    router: theRouter, 
    el:'#appsus-app',
    template: `
        <section class="root">
            <app-header></app-header>
            <router-view></router-view>
        </section>
    `,
    components: {
        appHeader,
    }
})