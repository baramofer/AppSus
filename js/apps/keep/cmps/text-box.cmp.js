'use strict';

import toolBar from '../cmps/tool-bar.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >
        <div style="word-wrap: break-word; width: 90%;" class="text-container" 
        ref="inputEdit" @dblclick.stop="textToogleOpen">{{note.content}}</div>
        <tool-bar :note="note" @noteChange="onNoteChange"></tool-bar>
    </div>
    `,
    data(){
        return{
            textToggle: false,
            editToggle: this.note.content,
        }
    },
    methods: {
        textToogleOpen() {
            setTimeout(() => { this.$refs.inputEdit.focus(); }, 0)
            this.textToggle = !this.textToggle
        },
        onNoteChange(noteId, type, action, value) {
            console.log(noteId, type, action, value);
            this.$emit('noteChange', noteId, type, action, value)
        },
    },
    components:{
        toolBar
    }
}