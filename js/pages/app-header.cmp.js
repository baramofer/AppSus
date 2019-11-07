'use strict'

export default {
    template: `
    <section class="header-container">
        <div class="logo">
            <i class="fas fa-hat-cowboy-side"></i>
            <span style="color:grey; font-size:35px">AppSus</span>
        </div>
        <div class="burger" @click=""><i class="fas fa-bars"></i></div>
        <div class="burger-menu"></div>
        <nav class="nav-container">
                    <div class="search"><i class="fas fa-search"></i></div>
                    <router-link to="/">Home</router-link>|
                    <router-link to="/mail">Mail</router-link>|
                    <router-link to="/keep">Keep</router-link>
                    <!-- <router-link to="/books">Books</router-link> | -->
        </nav>
    </section>
    `,
    methods:{

    }
}