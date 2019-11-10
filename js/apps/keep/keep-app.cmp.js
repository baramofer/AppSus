// import userMsg from './cmps/user-msg.cmp.js';

import keepFilter from './cmps/keep-filter.cmp.js';
import keepList from './cmps/keep-list.cmp.js';
import keepService from './service/keep.service.js'
import keepAdd from './cmps/keep-add.cmp.js'
import textBox from './cmps/text-box.cmp.js'
import youtube from './cmps/youtube.cmp.js'
import url from './cmps/url.cmp.js'
import imgNote from './cmps/img-note.cmp.js'
import todo from './cmps/todo.cmp.js'


export default {
  template: `
      <section v-if="notesToShow" class="notes-container" >
        <keep-filter @filtered="setFilter"></keep-filter>
        <keep-add @noteAdd="addNote"></keep-add>
        <keep-list @noteChange="noteChange" :notes="notesToShow"></keep-list>
      </section>
    `
  ,
  data() {
    return {
      notesList: null,
      filterBy: null,
      // filterType: 'all'
    }
  },
  methods: {
    // setFilter(filter, type="all") {
    //   this.filterByTxt = filter    
    //   this.filterType = type
    // console.log('type:',this.filterType,',txt:', this.filterByTxt);setFilter(filter, type="all") {
    setFilter(filter) {
      this.filterBy = filter
    }
    // this.filterBy = filter    
    // console.log('filter:',this.filterBy);
    // console.log('filter:',filter);
    ,
    addNote(type, value) {
      keepService.addNote(type, value)
    },
    noteChange(noteId, type, action, value) {
      console.log('app:', noteId, type, action, value);

      // switch case need
      if (action === 'delete') keepService.deleteNote(noteId)
      if (action === 'underLine') keepService.todoUnderLine(noteId, value)
      if (action === 'todoDelete') keepService.todoDelete(noteId, value)
      if (action === 'addTodo') keepService.addTodo(noteId, value)
      if (action === 'editTodo') keepService.editTodo(noteId, value)
      if (action === 'clone') keepService.cloneNote(noteId, type, value)
      if (action === 'edit') keepService.editNote(noteId, value)
      if (action === 'tack') keepService.tackNote(noteId)
      if (action === 'changeColor') keepService.changeColorNote(noteId, value)
    },
  },
  computed: {
    notesToShow() {
      return this.notesList
      // if(!this.filterBy) return this.notesList;
      // console.log(this.filterBy);
      // return this.notesList.filter(note => {
      //   note.content.includes(this.filterBy.content)

      //   console.log('filter:', this.filterBy.content);

      // })
      // console.log('type:',this.filterType,',txt:', this.filterByTxt);
      //   if (!this.filterByTxt && this.filterType==='all') {
      //     return this.notesList;
      // } else if(!this.filterByTxt){
      //     return this.notesList.filter(note => note.type.includes(this.filterType))
      // } 
      // }
      //   else{
      //     console.log('filterByWord:',this.filterByTxt);
      //     return this.notesList.filter(note => {
      //       // note.type.includes(this.filterType) &&
      //       console.log(note.content);

      //       note.content.includes(this.filterByTxt) });
      //     }
    },
    selectNote() {
      console.log('note selcted');

    }
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
    textBox,
    youtube,
    keepAdd,
    imgNote,
    todo
  }
}