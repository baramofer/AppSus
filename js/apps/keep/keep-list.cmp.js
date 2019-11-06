'use strict';
import keepPreview from './keep-preview.cmp.js';
import keepService from './service/keep.service.js'

export default {
props: ['notes'],
template: `
<section class="notes-list-container">
        <keep-preview :note="note" v-for="note in notes"></keep-preview>
</section>
`,
created(){

},
components:{
    keepPreview,
    keepService
    }
}