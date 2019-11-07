import countersCmp from './counter.cmp.js';

export default {
  name: 'Mailfilter',
  template: `
    <section class="mail-filter flex ">
        <div class="flex align-center row-reverse">
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="🔍Search for mail" />
   <select v-model="filterBy.isRead" @change="emitFilter($event)">
         <option value="All">All</option>
         <option value="Read">Read</option>
        <option value="UnRead">Unread</option>
        <option value="fav">Starred ⭐</option>
  </select>
       </div>
        </section>
`,
  props: [],
  data() {
    return {
      filterBy: {
        txt: '',
        isRead: 'All',
        isFav: false
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    emitFilter(event) {
    //   console.log(this.filterBy);
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: { countersCmp }
};
