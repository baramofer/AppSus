'use strcit';

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container" :class="note.color" >

        <div ref="inputEdit" @dblclick.stop="textToogleOpen">{{note.content}}</div>

        <div class="toolBar">
        <i class="fas fa-palette" @click.stop="colorToggle = !colorToggle"></i>
        <i class="fas fa-trash-alt" @click="onNoteChange(note.id, 'delete')"></i>
        <i class="fas fa-clone" @click="onNoteChange(note.id, 'clone')"></i>
        <i class="fas fa-edit" @click.stop="textToogleOpen"></i>
        <i class="fas fa-thumbtack" @click="onNoteChange(note.id, 'tack')"></i>
        </div>
        <div class="colorToggle" v-show="textToggle">
            <input ref="inputEdit" type="text"  v-model="editToggle" @input="onNoteChange(note.id, 'edit', editToggle)" 
            @blur="textToggle=false">
        </div>
        <div class="colorToggle" v-if="colorToggle">
            <img @click="onNoteChange(note.id, 'changeColor', 'red')" src="./img/c_red.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'blue')" src="./img/c_blue.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'green')" src="./img/c_green.png" alt=""/>
            <img @click="onNoteChange(note.id, 'changeColor', 'yellow')" src="./img/c_yellow.png" alt=""/>
        </div>
    </div>
    `,
    data(){
        return {
            colorToggle:false,
            editToggle:this.note.content,
            textToggle:false
        }
    },
    methods:{
        textToogleOpen(){
            setTimeout(()=>{this.$refs.inputEdit.focus();},0) 
            this.textToggle = !this.textToggle
        },
        editText(){
            console.log('s');
            
        },
        onNoteChange(noteId, action, value){
            console.log(noteId, action, value);
            this.$emit('noteChange', noteId, action, value)            
        },
    },
    computed:{
        limitedText(){
            if(this.editToggle.length > 100) console.log('100');
            
        }
    },
    created(){
        window.document.body.addEventListener("click",  ()=> {
            this.colorToggle=false
        })
        
        // eventBus.$emit('show-msg', `review assign for "${this.book.title}" thank you!`);
        
    }
}