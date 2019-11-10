'use strict';
import keepPreview from './keep-preview.cmp.js';
import keepService from './service/keep.service.js'
import textBox from './text-box.cmp.js'
import youtube from './youtube.cmp.js'
import url from './url.cmp.js'
import imgNote from './img-note.cmp.js'
import todo from './todo.cmp.js'

export default {
props: ['notes'],
template: `
<section class="notes-list-container">
        <component :is="note.type" @noteChange="noteChange" :note="note" v-for="note in notes" ></component>
</section>
`,
methods:{
    noteChange(noteId, type, action, color){
        this.$emit('noteChange', noteId, type, action, color)           
    }
},

created(){
},
components:{
    keepPreview,
    keepService,
    textBox,
    youtube,
    url,
    imgNote,
    todo
    }
}