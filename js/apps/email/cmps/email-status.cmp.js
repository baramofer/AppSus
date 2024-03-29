
import mailService from '../services/mail.service.js';
export default {
  template: `   
               <div class="progress-bar-container">
               <div class="progress-bar" :style="{ 'width': progressPercent +'%'}" >{{progressPercent}}%</div>  
               </div>
  `,
  props: ['totalCount', 'readCount'],
  data() {
    return {
    }
  },
  computed: {
    progressPercent() {
      const percent = (this.readCount / this.totalCount * 100).toFixed();
      return this.totalCount !== 0 ? percent : 0;
    }
  },
}