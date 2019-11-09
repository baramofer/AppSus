export default {
    template: `
    <section class="note-filter-container">
        <form @submit.prevent="onFilter">
            <input type="text" placeholder="Search in notes" v-model="filterBy.content" />
            <select v-model="filterBy.type" >
                <option value="all" selected>All</option>
                <option value="text-box">Notes</option>
                <option value="todo">Todos</option>
                <option value="url">Urls</option>
            </select>
            <button>filter</button>
        </form>
    </section>
    `,
    data() {
        return {
            // filterTerm: '',
            // filterType: '',
            filterBy: {
                content: '',
                type: 'all'
            }
        }
    },
    methods: {
        onFilter(){
            this.$emit('filtered', this.filterBy)
            console.log(this.filterBy);
            // this.filterBy.content=''
            // this.filterBy.type=''
            // this.$emit('filtered', this.filterTerm, this.filterType)
            // this.filterTerm='';
            // this.filterType='';
        }
    },
    computed:{
    },
    created() {
        this.$emit('filtered', this.filterBy)
        // this.$emit('filtered', this.filterTerm, this.filterType)
    }
}