export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >
        <div></div>
            <ul class="todo-container" style="user-select: none">
                <li style="word-wrap: break-word; width: 50%;" 
                @click="onNoteChange(note.id, note.type, 'underLine', todo.line)"
                v-for="todo in note.content" :class="{'line-through': todo.underLine}">
                <i class="fas fa-trash-alt" @click="onNoteChange(note.id, note.type, 'todoDelete', todo.line)"></i> {{todo.line}}
                </li>
                <i class="fas fa-plus" @click.stop="textToogleOpen"></i>
            </ul>
        <div class="toolBar">
        <i class="fas fa-palette" @click.stop="colorToggle = !colorToggle"></i>
        <i class="fas fa-trash-alt" @click="onNoteChange(note.id, note.type, 'delete')"></i>
        <i class="fas fa-clone" @click="onNoteChange(note.id, note.type, 'clone', note.content)"></i>
        <i class="fas fa-thumbtack" @click="onNoteChange(note.id, note.type, 'tack')"></i>
        </div>
        <div class="colorToggle" v-show="textToggle">
            <input ref="inputEdit" type="text" v-model="editToggle" @keyup.enter="onNoteChange(note.id, note.type, 'addTodo', editToggle)" >
        </div>
        <div class="colorToggle" v-if="colorToggle">
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'red')" src="./img/c_red.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'blue')" src="./img/c_blue.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'green')" src="./img/c_green.png" alt=""/>
            <img @click="onNoteChange(note.id, note.type, 'changeColor', 'yellow')" src="./img/c_yellow.png" alt=""/>
        </div>
    </div>
    `,
    data() {
        return {
            editToggle: null,
            colorToggle: false,
            textToggle: false,
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
            this.textToggle = false;
        },
    },
    computed: {
        limitedText() {
            if (this.editToggle.length > 100) console.log('100');
        }
    },
    created() {
        window.document.body.addEventListener("click", () => {
            this.colorToggle = false
        })
    }
}