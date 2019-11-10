'use strict'

export default {
    template: `
    <section class="header-container">
        <div class="logo">
            <i class="fas fa-hat-cowboy-side"></i>
            <span style="color:grey; font-size:35px">AppSus</span>
        </div>
        <div class="burger" @click="burgerToggle"><i class="fas fa-bars"></i></div>
        <div class="burger-menu" v-bind:class="{'burger-show':burgerMenu}">
                    <div class="menu-link" @click="burgerToggle"><router-link  to="/">Home</router-link></div>
                    <div class="menu-link" @click="burgerToggle"><router-link  to="/mail">Mail</router-link></div>
                    <div class="menu-link" @click="burgerToggle"><router-link  to="/keep">Keep</router-link></div>
        </div>
        <nav class="nav-container">
                    <div class="search"><i class="fas fa-search"></i></div>
                    <router-link to="/">Home</router-link>|
                    <router-link to="/mail">Mail</router-link>|
                    <router-link to="/keep">Keep</router-link>
        </nav>
    </section>
    `,
    data(){
        return {
            burgerMenu:false
        }
    },
    methods:{
        burgerToggle(){
            this.burgerMenu=!this.burgerMenu
        }
    }

}