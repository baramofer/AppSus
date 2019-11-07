// import userMsg from './cmps/user-msg.cmp.js';

import keepFilter from './keep-filter.cmp.js';
import keepList from './keep-list.cmp.js';
import keepService from './service/keep.service.js'

export default {
    template:`
      <section v-if="notesToShow" class="notes-container" >
          <keep-filter @filtered="setFilter"></keep-filter>
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
    noteChange(noteId, action, value){
      // switch case need
      if(action ==='delete') keepService.deleteNote(noteId)
      if(action ==='clone') {
        keepService.cloneNote(noteId)

      }
      if(action ==='edit') keepService.editNote(noteId, value)
      if(action ==='tack') keepService.tackNote(noteId)
      if(action ==='changeColor') keepService.changeColorNote(noteId, value)
                
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
    }
}