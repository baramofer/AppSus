import mailService from './services/mail.service.js'
// import mailList from './cmps/email-list.cmp.js'
import sideNav from './cmps/email-sidebar.cmp.js'
// import emailDetails from './cmps/email-details.cmp.js'


export default {
    template: `
        <section class="email-main-container">
                <div class="emails-container">
                    <li class="current-mail" v-for="mail in mails">{{mail}}</li>
                </div>
                <side-nav></side-nav>
            <!-- <mail-list></mail-list> -->
        </section>
    `,
    data(){
      return {
          mails: null
      }  
    },
    created(){
        this.mails = mailService.getMails()
    },
    components: { sideNav, /*mailList, emailDetails*/ }
}