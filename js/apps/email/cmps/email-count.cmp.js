import mailService from '../services/mail.service.js';
import eventBus, { EMAILS_DB } from '../../../../services/event-bus.js';

export default {
  template: `
    <section class="mail-count flex  both-align-center"> 
                <span>Email Count: </span>
                <span class="count"> {{mailsToReadShow}}/{{emails}}</span>
    </section>
`,
  data() {
    return {
      emails: null,
      mailsToRead: null,
      mailsToReadShow: null
    };
  },
  created() {
    mailService.getMails()
      .then(emails => this.emails = emails.length)

    mailService.getMails()
      .then(emails => {
        console.log(emails);
        
        emails.filter(email => !email.isRead)
      })

    // this.mailsToRead = mailService.getMails().filter(email => {
    //   return !email.isRead;
    // });
    this.mailsToReadShow = this.mailsToRead.length;

    eventBus.$on(EMAILS_DB, emails => {
      this.mailsToRead = emails.filter(email => {
        return !email.isRead;
      });
      this.mailsToReadShow = this.mailsToRead.length;
    });
  },
};
