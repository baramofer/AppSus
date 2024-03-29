import mailService from '../services/mail.service.js';
import utilService from '../services/util.service.js';
import sideNav from '../cmps/email-sidebar.cmp.js'
import appHeader from '../../../../js/pages/app-header.cmp.js'

export default {
  template: `
  <!-- <header-cmp></header-cmp> -->
      <div class="email-det-container">
      <side-nav></side-nav>
    <section class="email-det">
    <div class="flex space-between send-mail-head"><span>{{subject}}</span><span><i @click="backToMails" class="fas fa-times"></i></span></div>
    <div class="flex inputs-container">
    <button class="replyBtn" v-if="!isReply" @click="replymail"><i class="fas fa-reply"></i> Reply</button>
    <button class="replyBtn" v-if="isReply" @click="sendmail"><i class="fas fa-share"></i> Send</button>
    <div class="flex inputs-container"><button class="saved-contatcs-btn" @click="showMailsAddress=!showMailsAddress">Saved Contacts</button>
        <div class="flex column inputs-container">
          <div class="flex inputs-container"><p class="subject">Subject:</p><input v-model="newEmail.subject" type="text" placeholder="Enter mail Subject"/>
          <p class="subject">Mail Address: </p> <input v-model="newEmail.sendto" type="text" placeholder="Enter email address"/>   </div> 
          <transition name="appear">
                <div class="show-mails-address" v-if='showMailsAddress'>
              <h3>Saved Contacts:</h3>  
              <ol>
                  <li>snir@gmail.com</li>
                  <li>ofer@gmail.com</li>
                </ol>
              </div>       
              </transition>        
          </div>
        </div>
      </div>
      <div class="curr-mail">
      <div class="sent-from"> Sent From: {{email.name}}</div>
                <textarea name="" cols="40" rows="7" v-model="newEmail.body"></textarea>
                </div>
                 </section>
              </div>
`,
  data() {
    return {
      email: null,
      isReply: false,
      newEmail: null,
      subject: '',
      showMailsAddress: ''
    };
  },

  created() {
    const mailId = this.$route.params.theMailId;
    this.email = mailService.getById(mailId);
    this.subject = this.email.subject;
    this.newEmail = {
      _id: this.email._id,
      body: this.email.body,
      subject: this.email.subject,
      name: 'Snir&Ofer',
      isRead: true,
      sentAt: new Date().getHours() + ':' + new Date().getMinutes(),
      isDeleted: false,
      sendto: this.email.sendto,
      isSent: true,
      isStarred: false
    };
  },
  methods: {
    sendmail() {
      if (!this.newEmail.sendto) {
        return false;
      }

      mailService.addMail(this.newEmail);

      this.$router.push('/mail');
    },
    replymail() {
      this.isReply = true;
      this.newEmail.subject = 'RE:' + this.newEmail.subject;
    },
    backToMails() {
      mailService.saveEmailDB();
      this.$router.push('/mail');
    }
  },
  components: { appHeader, sideNav, utilService }
};
