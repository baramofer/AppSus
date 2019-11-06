import mailservice from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';

export default {
  template: `
    <section class="mail-list">
      <ul>
        <li class="flex space-between emails-titles"> 
        </li>
    </ul>
    </section>
`,
  props: [],
  data() {
    return {
      emails: null,
      temp: [],

    };
  },
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.getMails();
    console.log(this.emails);
  },
};