'use strict';

import toolBar from '../cmps/tool-bar.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >
        <iframe :src="urlAdjust"
         frameborder="0" allowfullscreen></iframe>
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
        urlAdjust() {
            var adress = this.note.content.split('=')
            return `https://www.youtube.com/embed/${adress[1]}`
        },
    },
    components:{
        toolBar
    }
}