import countersCmp from './counter.cmp.js';

export default {
  template: `
    <section class="mail-filter flex align-center row-reverse">
        <!-- <div class="flex align-center row-reverse"> -->
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="🔍 Search mail" />
            <select v-model="filterBy.isRead" @change="emitFilter($event)">
                  <option value="All">All</option>
                  <option value="Read">Read</option>
                  <option value="Unread">Unread</option>
            </select>
        <!-- </div> -->
    </section>
`,
  data() {
    return {
      filterBy: {
        txt: '',
        isRead: 'All',
        isStarred: true
      }
    };
  },
  created() { },
  destroyed() { },
  computed: {},
  methods: {
    emitFilter(event) {
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: { countersCmp }
};