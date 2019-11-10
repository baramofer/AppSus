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
            filterBy: {
                content: '',
                type: 'all'
            }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filtered', this.filterBy)
            console.log(this.filterBy);
        }
    },
    computed: {
    },
    created() {
        this.$emit('filtered', this.filterBy)
    }
}