import mailService from './services/mail.service.js'


export default {
    template: `
        <section class="root">
            <h1>Im an email App</h1>
            <ul v-for="mail in mails">{{mail}}</ul>
        </section>
    `,
    data(){
      return {
          mails: null
      }  
    },
    created(){
        this.mails = mailService.getMails()
    }
}