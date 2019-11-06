import mailservice from '../services/mail.service.js'

export default {
  template: `
    <section class="mail-list">
      <ul>
        <li class="flex space-between emails-titles"> 
        </li>
    </ul>
    
    <mail-prev 
      :idx="idx" 
      :emails="filterdEmails"
      v-for= "(email,idx) in filterdEmails" 
      :email="email" 
        :key="idx" class="flex space-between">

      </mail-prev>
    </section>
`,
props: [],
data() {
  return {
    emails: null,
    currentEmailsState: 1,
    filter: null,
    temp: [],
    sort: {
      subject: null,
      date: null
    }
  };
},
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.getMails();
    console.log(this.emails);
  },
  components: {

  }
};