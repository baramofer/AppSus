import {eventBus} from '../service/event-bus.service.js'

export default {
    template: `
        <section class="user-msg" v-if="msg">
            <button @click="close">x</button>
            <p>{{msg}}</p>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('show-msg', (msg)=>{
            this.msg = msg;
            setTimeout(()=>{
                this.msg = null;
            }, 2000)
        })
    },
    methods: {
        close() {
            this.msg = null;
        }
    }
}