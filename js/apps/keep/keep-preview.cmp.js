'use strcit';

export default {
    props: ['note'],
    template: `
    <div class="note-preview-container">
        <!-- {{book.title}}
        {{book.listPrice.amount}} {{currencyRate}} -->
        {{note}}
        hello
        <!-- <img :src="book.thumbnail"/> -->
    </div>
    `,
    methods:{
    },
    computed:{

    },
    created(){
        // eventBus.$emit('show-msg', `review assign for "${this.book.title}" thank you!`);
        
    }
}