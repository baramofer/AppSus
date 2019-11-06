'use strcit';

export default {
    props: ['note'],
    template: `
    <!-- :class="{contenteditable:editToggle}" -->
    <div class="note-preview-container" :class="note.color" >
        {{note.content}}

        <div class="toolBar">
        <i class="fas fa-palette" @click.stop="toolsToggle = !toolsToggle"></i>
        <i class="fas fa-trash-alt" @click="onNoteChange(note.id, 'delete')"></i>
        <i class="fas fa-clone" @click="onNoteChange(note.id, 'clone')"></i>
        <i class="fas fa-edit" @click="editText"></i>
        <i class="fas fa-thumbtack" @click="onNoteChange(note.id, 'tack')"></i>
        </div>
        <div class="toolsToggle" v-if="toolsToggle">
            <img @click="onNoteChange(note.id, 'changeColor', 'red')" src="./img/c_red.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'blue')" src="./img/c_blue.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'green')" src="./img/c_green.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'yellow')" src="./img/c_yellow.png" alt=""/>
        </div>
    </div>
    `,
    data(){
        return {
            toolsToggle:false,
            editToggle:false
        }
    },
    methods:{
        editText(){
            
        },
        onNoteChange(noteId, action, color){
            console.log(noteId, action, color);
            this.$emit('noteChange', noteId, action, color)            
        },
        // changeToBlue(noteId){
        //     this.note.color = 'blue';
        //     keepList.noteChange(noteId, 'changeColor', 'blue')
        // },
        // changeToGreen(){
        //     this.note.color = 'green';
        // },
        // changeToYellow(){
        //     this.note.color = 'yellow';
        // },
        // changeToRed(){
        //     this.note.color = 'red';
        //     keepList.noteChange
        // },
    },
    computed:{

    },
    created(){
        window.document.body.addEventListener("click",  ()=> {
            this.toolsToggle=false;
        })
        
        // eventBus.$emit('show-msg', `review assign for "${this.book.title}" thank you!`);
        
    }
}