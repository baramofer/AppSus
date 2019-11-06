'use strict';
import keepPreview from './keep-preview.cmp.js';
import keepService from './service/keep.service.js'

export default {
props: ['notes'],
template: `
<section class="notes-list-container">
        <keep-preview @noteChange="noteChange" :note="note" :idx="idx" v-for="(note, idx) in notes"></keep-preview>
</section>
`,
methods:{
    noteChange(noteId, action, color){
        this.$emit('noteChange', noteId, action, color)           
    }
},
created(){
},
components:{
    keepPreview,
    keepService
    }
}