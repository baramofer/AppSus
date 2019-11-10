import storageService from '../services/storage.service.js';
import eventBus, { EMAILS_DB } from '../../../../services/event-bus.js';

export default {
  props: ['email', 'idx', 'emails'],
  template: `
          <transition name="appear">
    <li class="mail-prev flex align-center" :class="{ read: !email.isRead }" > 
        <span class="main-mail-spec flex align-center">             
            <i @click="toggleStar" 
                :class="[email.isStarred? 'fas' : 'far']"
                class="fa-star cursor-pointer"></i>   
            {{email.name}}
        </span>
        <span 
            @click="toggleIsRead('noToggle')" 
            class="left subject"> 
              <router-link :to="emailUrl">{{email.subject | snippet}}</router-link>  
        </span> 
        <span>{{email.sentAt}}</span>
        <i  @click.stop="deleteEmail(idx)" class="fas fa-trash-alt cursor-pointer" ></i>
     <span @click="toggleIsRead">
                      <i class="far fa-envelope-open cursor-pointer" v-if="email.isRead"></i>
                      <i class="fas fa-envelope cursor-pointer" v-else></i>
                    </span>
      </li>
      </transition>
`,
  data() {
    return {};
  },
  computed: {
    emailUrl() {
      return '/mail/' + this.email._id;
    }
  },
  methods: {
    deleteEmail(emailIdx) {
      this.emails[emailIdx].isDeleted = true;
      storageService.store('emailsDB', this.emails);
      //TODO: emit to list so it will delete it - also for toggleRead and togglefav.
    },
    toggleStar() {
      this.email.isStarred = !this.email.isStarred;
    },
    toggleIsRead(status) {
      if (status === 'noToggle') {
        this.email.isRead = true;
        storageService.store('emailsDB', this.emails);
        return;
      }

      this.email.isRead = !this.email.isRead;
      eventBus.$emit(EMAILS_DB, this.emails); //TODO: TEST TEST TEST
      storageService.store('emailsDB', this.emails);
    }
  }
};