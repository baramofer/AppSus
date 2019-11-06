'use strict'

export default {
    template: `
    <section class="header-container">
        <div class="logo">
            <i class="fas fa-hat-cowboy-side"></i>
            <span style="color:grey">AppSus</span>
        </div>
        <nav class="nav-container">
                   <router-link to="/">Home</router-link>|
                    <router-link to="/mail">Mail</router-link>|
                    <router-link to="/keep">Keep</router-link>
                    <!-- <router-link to="/books">Books</router-link> | -->
        </nav>
    </section>
    `
}