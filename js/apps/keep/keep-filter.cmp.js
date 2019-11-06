export default {
    template: `
    <section class="note-filter-container">
        <!-- <form @submit.prevent="onFilter">
            name:
            <input type="text" placeholder="Book Name" v-model="filterBy" />
            <button>Filter it</button>
        </form> -->
    </section>
    `,
    data() {
        return {
            filterBy: ''
        }
    },
    methods: {
        onFilter(){
            // console.log(this.filterBy);
            // this.$emit('filtered', this.filterBy)
            // this.filterBy=''
        }
    },
    computed:{
    },
    created() {
        // this.$emit('filtered', this.filterBy)
    }
}