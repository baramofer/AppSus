'use strict';

import toolBar from '../cmps/tool-bar.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >
        <img :src="note.content" >
        <tool-bar :note="note" @noteChange="onNoteChange"></tool-bar>
    </div>
    `,
    methods: {
        onNoteChange(noteId, type, action, value) {
            this.$emit('noteChange', noteId, type, action, value)
        },
    },
    components:{
        toolBar
    }
}