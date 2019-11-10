import mailservice from '../services/mail.service.js'
import utilService from '../services/util.service.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import emailDetails from '../cmps/email-details.cmp.js';
import eventBus, { PICKED_EMAIL_STATE } from '../../../../services/event-bus.js';
import emailFilter from './email-filter.cmp.js';

export default {
  props: [],
  template: `
<section class="mail-list">
  <div class="email-list-container">
      <email-filter @filterapp="setFilter"></email-filter>
      <li class="flex space-between emails-titles"> 
        <span> Sent From </span> 
        <span :class="{picked:sort.subject }" class="sort-btn" @click="sortSubject">Sort By Subject </span> 
        <span :class="{picked:sort.date }" class="sort-btn" @click="sortDate">Sort By Date</span>
      </li>
  <email-preview 
  :idx="idx" 
  :emails="filterdEmails"
  v-for= "(email,idx) in filterdEmails" 
  :email="email" 
    :key="idx" class="flex space-between">
  </email-preview>
</div>
</section>
`,
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
    this.emails = mailservice.getMails();
    eventBus.$on(PICKED_EMAIL_STATE, state => {
      this.currentEmailsState = state;
    })
  },
  computed: {
    filterdEmails: function () {
      this.temp = this.emails;
      if (!this.filter || this.filter.isRead === 'All') {
        if (!this.filter) {
          this.temp = this.emails;
        } else {
          this.temp = this.emails.filter(email =>
            email.subject.toLowerCase().includes(this.filter.txt.toLowerCase())
          );
        }
      } else if (this.filter.isRead === 'Read') {
        this.temp = this.emails.filter(
          email =>
            email.isRead &&
            email.subject.toLowerCase().includes(this.filter.txt.toLowerCase())
        );
      } else if (this.filter.isRead === 'Unread') {
        this.temp = this.emails.filter(
          email =>
            !email.isRead &&
            email.subject.toLowerCase().includes(this.filter.txt.toLowerCase())
        );
      } else if (this.filter.isRead === 'Star') {
        this.temp = this.emails.filter(
          email =>
            email.isStarred &&
            email.subject.toLowerCase().includes(this.filter.txt.toLowerCase())
        );
      }
      if (this.currentEmailsState === 1) {
        return this.temp.filter(email => !email.isDeleted);
      } else if (this.currentEmailsState === 2) {
        return this.temp.filter(email => email.isSent);
      } else if (this.currentEmailsState === 3) {
        return this.temp.filter(email => email.isDeleted);
      }
      else if (this.currentEmailsState === 4) {
        return this.temp.filter(email => email.isStarred);
      }
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filter = filterBy;
    },
    sortSubject() {
      this.sort.subject = true;
      this.sort.date = false;
      this.emails.sort((email1, email2) => {
        if (email1.subject.toLowerCase() > email2.subject.toLowerCase()) {
          return 1;
        } else if (
          email1.subject.toLowerCase() < email2.subject.toLowerCase()
        ) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    sortDate() {
      this.sort.subject = false;
      this.sort.date = true;
      this.emails.sort((email1, email2) => {
        if (email1.sentAt > email2.sentAt) {
          return 1;
        } else if (email1.sentAt < email2.sentAt) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  },
  components: {
    emailPreview, emailDetails, emailFilter,
  }
};