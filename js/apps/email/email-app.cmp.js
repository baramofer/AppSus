import mailService from './services/mail.service.js'
import emailList from './cmps/email-list.cmp.js'
import sideNav from './cmps/email-sidebar.cmp.js'
import emailDetails from './cmps/email-details.cmp.js'


export default {
    template: `
        <section class="email-main-container">
            <email-list></email-list>
                <div class="flex column side center">
            <side-nav>
            </side-nav>
            <div class="emails-container">
            </div>
        </div>
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
    components: { sideNav, emailList, emailDetails}
}