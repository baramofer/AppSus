import emailCount from './email-count.cmp.js';
// import noteCount from '../apps/miss-keep/cmp/note-count.cmp.js';

export default {
  props: [],
  template: `
    <section class="counters"> 
    <div class="flex align-center"> 
      <div class="counters-container">
        <ul class="flex clean-list space-between">
          <li class="flex  align-center"> <router-link class="flex" to="/mail"> <mail-count> </mail-count> </router-link></li>
          <!-- <li class="flex  align-center"> <router-link class="flex" to="/missKeep"> <img  src="img/notepad.svg"/><note-count> </note-count></router-link></li> -->
          <!-- <li class="flex  align-center"> <router-link class="flex" to="/missBook"><img  title="Under-construction" src="img/books.svg"/></router-link></li> -->
        </ul>
      </div>
      </div>
    </section>
`,
  data() {
    return {};
  },
  components: { emailCount, /*noteCount*/ }
};