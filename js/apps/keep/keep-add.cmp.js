'use strcit';

export default {
    template: `
    <div class="keep-search-container">
        <form @submit.prevent="addNote" class="keep-add-form-container">
            <input type="text" placeholder="what's on your mind?" v-model="content" />
        </form>
        <div class="search-buttons-container">
        <i @click="isClicked('text-box')" class="fas fa-font" :class="{unclicked: typeSelected === 'text-box'}"></i>
        <i @click="isClicked('url')" class="fas fa-globe-americas" :class="{unclicked: typeSelected === 'url'}"></i>
        <i @click="isClicked('youtube')" class="fab fa-youtube" :class="{unclicked: typeSelected === 'youtube'}"></i>
        <i @click="isClicked('imgNote')" class="far fa-image" :class="{unclicked: typeSelected === 'imgNote'}"></i>
        <i @click="isClicked('todo')" class="fas fa-list" :class="{unclicked: typeSelected === 'todo'}"></i>
        </div>
    </div>
    `,
    data(){
        return {
            content:null,
            typeSelected: 'text-box'
        }
    },
    methods:{
        addNote(){
            this.$emit('noteAdd', this.typeSelected, this.content)            
        },
        isClicked(value){
           this.typeSelected = value
           }   
        }     
}    