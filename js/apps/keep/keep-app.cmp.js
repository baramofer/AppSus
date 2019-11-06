// import userMsg from './cmps/user-msg.cmp.js';

import keepFilter from './keep-filter.cmp.js';
// import keepPreview from './keep-preview.cmp.js';
import keepList from './keep-list.cmp.js';
import keepService from './service/keep.service.js'

export default {
    template:`
      <section v-if="notesToShow" class="notes-container" >
          <!-- <book-filter @filtered="setFilter"></book-filter> -->
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
    noteChange(noteId, action, color){
      // switch case need
      if(action ==='delete') keepService.deleteNote(noteId)
      if(action ==='clone') keepService.cloneNote(noteId)
      if(action ==='edit') keepService.editNote(noteId)
      if(action ==='tack') keepService.tackNote(noteId)
      if(action ==='changeColor') keepService.changeColorNote(noteId, color)
                
  }
},
    computed:{
      notesToShow(){
          return this.notesList
        //   if (!this.filterBy) return this.booksList;
        //   var regex = new RegExp(`${this.filterBy}`, 'i');
        //   return this.booksList.filter(book => regex.test(book.title))
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
      keepFilter
    }
}