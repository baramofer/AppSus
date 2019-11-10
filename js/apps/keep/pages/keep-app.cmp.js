import keepFilter from '../cmps/keep-filter.cmp.js';
import keepList from '../cmps/keep-list.cmp.js';
import keepService from '../services/keep.service.js'
import keepAdd from '../cmps/keep-add.cmp.js'

export default {
  template: `
      <section  class="notes-container" >
          <keep-filter @filtered="setFilter"></keep-filter>
          <keep-add @noteAdd="addNote"></keep-add>
          <keep-list v-if="notesToShow" @noteChange="noteChange" :notes="notesToShow"></keep-list>
      </section>
    `,
  data() {
    return {
      notesList: null,
      filterBy: {
        content: '',
        type: 'all'
      },
    }
  },
  methods: {
    setFilter(filter) {
      this.filterBy = filter
    },
    addNote(type, value) {
      keepService.addNote(type, value)
    },
    noteChange(noteId, type, action, value) {
      keepService.noteChange(noteId, type, action, value)
    }
  },
  computed: {
    notesToShow() {
      if(this.filterBy.type==='all' && this.filterBy.content==='') return this.notesList
      if(this.filterBy.type==='all') return this.notesList.filter(note => note.content.includes(this.filterBy.content))
      var notes = this.notesList.filter(note => {
        return note.content.includes(this.filterBy.content) &&
        note.type === this.filterBy.type;
      })
      return notes

    },
  },
  created() {
    keepService.getNotes()
      .then(notes => {
        this.notesList = notes
      })
  },
  components: {
    keepList,
    keepFilter,
    keepAdd,
  }
}