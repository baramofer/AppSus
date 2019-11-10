'use strict';
import toolBar from '../cmps/tool-bar.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >
        <div ref="inputEdit" @dblclick.stop="textToogleOpen">
            <a :href="urlValid" target="_blank">
        {{note.content}}</a>
        </div>
        <tool-bar :note="note" @noteChange="onNoteChange"></tool-bar>
    </div>

    `,
    methods: {
        onNoteChange(noteId, type, action, value) {
            console.log(noteId, type, action, value);
            this.$emit('noteChange', noteId, type, action, value)
        },
    },
    computed: {
        urlValid() {
            if (!this.note.content.includes('http://')) return this.note.content = 'http://' + this.note.content;
            return this.note.content
        },
    },
    components:{
            toolBar
    }
}
