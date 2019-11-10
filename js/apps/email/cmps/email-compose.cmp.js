'use strict'
import mailService from '../services/mail.service.js'

export default {
    props: '',
    template: `
        <section class="review-add">
            <h2>New Email</h2>

            <form class="mail-form">
            <input type="mail" placeholder="To" v-model.trim="mail.to"/>
            <input type="text" placeholder="Subject" v-model.trim="email.subject"/>
            <textarea v-model="mail.body" cols="30" rows="5"></textarea>
            <button @click.prevent="handleMail()">Send</button>
            </form>
        </section>
    
    
    `,
    data() {
        return {
            email: {
                to: '',
                subject: '',
                body: ''
            }
        }
    },
    methods: {
        handleMail() {
            mailService.addMail(this.email)
                .then(res => { console.log(res) }
                )
        }
    }
}