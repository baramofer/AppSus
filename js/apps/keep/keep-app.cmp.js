// import userMsg from './cmps/user-msg.cmp.js';

import keepFilter from './keep-filter.cmp.js';
import keepList from './keep-list.cmp.js';
import keepService from './service/keep.service.js'
import keepAdd from './keep-add.cmp.js'
import textBox from './text-box.cmp.js'
import youtube from './youtube.cmp.js'
import url from './url.cmp.js'
import imgNote from './img-note.cmp.js'
import todo from './todo.cmp.js'


export default {
    template:`
      <section v-if="notesToShow" class="notes-container" >
          <keep-filter @filtered="setFilter"></keep-filter>
          <keep-add @noteAdd="addNote"></keep-add>
          <keep-list @noteChange="noteChange" :notes="notesToShow"></keep-list>
      </section>
    `
,
    data(){
      return {
        notesList: null,
        filterBy: null,
        // selectedBook: null,
      }
    },
    methods:{
      setFilter(filter) {
        this.filterBy = filter         
    },
    addNote(type, value){            
      keepService.addNote(type, value)
    },
    noteChange(noteId, type, action, value){
      // switch case need
      if(action ==='delete') keepService.deleteNote(noteId, type)
      if(action ==='clone') keepService.cloneNote(noteId, type)
      if(action ==='edit') keepService.editNote(noteId, type, value)
      if(action ==='tack') keepService.tackNote(noteId, type)
      if(action ==='changeColor') keepService.changeColorNote(noteId, type, value)        
  }
},
    computed:{
      notesToShow(){
          if (!this.filterBy) return this.notesList;
          var regex = new RegExp(`${this.filterBy}`, 'i');
          return this.notesList.filter(note => regex.test(note.content))
      },
      selectNote(){
          console.log('note selcted');
          
      }
    },
    created(){
      keepService.getNotes()
        .then(notes => {
            this.notesList = notes
            console.log(this.notesList);
        })
        
        
    },
    components:{
      keepList,
      keepFilter,
      textBox,
      youtube,
      url,
      keepAdd,
      imgNote,
      todo
    }
}