'use strict';

export default {
    props: ['note'],
    template: `  
    <section class="toolbar-container">     
        <div class="toolBar">
        <i class="fas fa-palette" @click.stop="colorToggle = !colorToggle"></i>
        <i class="fas fa-trash-alt" @click="onNoteChange(note.id, note.type, 'delete')"></i>
        <i class="fas fa-clone" @click="onNoteChange(note.id, note.type, 'clone')"></i>
        <i class="fas fa-edit" @click.stop="textToogleOpen"></i>
        <i class="fas fa-thumbtack" @click="onNoteChange(note.id, note.type, 'tack')"></i>
        </div>
        <div class="colorToggle" v-show="textToggle">
            <input ref="inputEdit" type="text"  v-model="editToggle" @input="onNoteChange(note.id, note.type, 'edit', editToggle)" 
            @blur="textToggle=false" @keyup.enter="textToggle=false">
        </div>
        <div class="colorToggle" v-if="colorToggle">
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'red')" src="./img/c_red.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'blue')" src="./img/c_blue.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'green')" src="./img/c_green.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'yellow')" src="./img/c_yellow.png" alt=""/>
        </div>
    </section>
    `,
    data() {
        return {
            colorToggle: false,
            editToggle: this.note.content,
            textToggle: false
        }
    },
    methods: {
        textToogleOpen() {
            setTimeout(() => { this.$refs.inputEdit.focus()}, 0)
            this.textToggle = !this.textToggle
        },
        onNoteChange(noteId, type, action, value) {
            console.log('img:', noteId, type, action, value);
            this.$emit('noteChange', noteId, type, action, value)
        },
    },
    created() {
        window.document.body.addEventListener("click", () => {
            this.colorToggle = false
        })
    },
}