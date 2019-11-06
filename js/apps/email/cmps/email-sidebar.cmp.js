import utilService from '../services/util.service.js';
import mailService from '../services/mail.service.js';
// import eventBus, {
//   PICKED_EMAIL_STATE,
//   NOTE_EMAIL
// } from '../../../event-bus.js';
export default {
  name: 'mailSide',
  template: `
    <section class="mail-side flex">
        <div class="flex column side center  "> 
            <ul>    
              <li class="send-mail" @click="showSendMailModal"><i class="fas fa-plus"></i> Compose</li>
              <li class="starred-mail"><i class="fas fa-star"></i> Starred</li>
                <li :class="{picked:state.mails}"   class="flex flex-space-around" @click="sendPickedEmails(1)"><i class="fas fa-inbox"></i> Inbox</li>
                <li :class="{picked:state.sent}" class="flex flex-space-around" @click="sendPickedEmails(2)"><i class="fas fa-share"></i> Sent Mail</li>
                <li :class="{picked:state.deleted}" class="flex flex-space-around" @click="sendPickedEmails(3)"><i class="fas fa-trash"></i> Trash</li>
              </ul>

              <!-- <transition name="slide-fade">

              <div class="send-modal" v-if="sendmodal">
                <div class="flex space-between send-mail-head"> <span>  New Messege </span> <span><i @click=showSendMailModal class="fas fa-times"></i></span> </div>
            <div class="flex">
            <button class="replayBtn" @click="sendmail"><i class="fas fa-share"></i>Send</button>
              <div class="flex column send-mail-inputs">
                <div><input v-model="newemail.subject" type="text" placeholder="Enter mail Subject"/>  </div> 
                <div><input v-model="newemail.sendto" type="text" placeholder="Enter email to send to"/>  </div>
                </div>
                </div>
                <textarea name="" id="" v-model="newemail.body" placeholder="Enter your email here:"></textarea>
              </div>
              
              </transition> -->
        </div>

    </section>
`,
  props: [],
  data() {
    return {
      sendmodal: false,
      pickedEmails: 1,
      state: {
        mails: true,
        sent: false,
        deleted: false
      },
      newemail: {
        _id: utilService.makeId(),
        body: '',
        subject: '',
        name: 'snir&ofer',
        isRead: true,
        sendAt: new Date().getHours() + ':' + new Date().getMinutes(),
        isDeleted: false,
        sendto: '',
        isSent: true
      },
      note: null
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    showSendMailModal() {
      this.sendmodal = !this.sendmodal;
    },
    sendmail() {
      if (!this.newemail.sendto) {
        return false;
      }
      mailService.updateDB(this.newemail);
      this.newemail = {
        id: '',
        body: '',
        subject: '',
        name: 'snir&ofer',
        isRead: true,
        sendAt: new Date(),
        isDeleted: false,
        sendto: '',
        isSent: true
      };
      this.sendmodal = !this.sendmodal;
    },
    sendPickedEmails(emailsType) {
      this.pickedEmails = emailsType;
      eventBus.$emit(PICKED_EMAIL_STATE, this.pickedEmails);
      this.state = { mails: false, sent: false, deleted: false };
      if (emailsType === 1) this.state.mails = true;
      if (emailsType === 2) this.state.sent = true;
      if (emailsType === 3) this.state.deleted = true;
      this.$router.push('/misterEmail');
    }
  },
  mounted() {},
  components: {}
};
