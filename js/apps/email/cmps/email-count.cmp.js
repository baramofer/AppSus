import mailService from '../services/mail.service.js';
import eventBus, { EMAILS_DB } from '../../../../services/event-bus.js';

export default {
  template: `
    <section class="mail-count flex  both-align-center"> 
                <span>Email Count: </span>
                <span class="count">    {{mailsToReadShow}}/{{emails}}</span>
    </section>
`,
  props: [],
  data() {
    return {
      emails: null,
      mailsToRead: null,
      mailsToReadShow: null
    };
  },
  created() {
    this.emails = mailService.query().length;
    this.mailsToRead = mailService.query().filter(email => {
      return !email.isRead;
    });
    this.mailsToReadShow = this.mailsToRead.length;

    eventBus.$on(EMAILS_DB, emails => {
      this.mailsToRead = emails.filter(email => {
        return !email.isRead;
      });
      this.mailsToReadShow = this.mailsToRead.length;
    });
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
