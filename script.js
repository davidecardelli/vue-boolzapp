console.log('vue ok', Vue);

const app = Vue.createApp({

    data() {
        return {
         currentIndex: 0,
         data,
         newMessage: '',
         search: '',
        }
    },

    methods: {
        
        // Cambio del currentIndex che userò per girare nella lista delle conversazioni. 
        goTo(index) {
           this.currentIndex = index;
        },

        sendMessage () {
            const message = {
                date: new Date().toLocaleString(),
                text: this.newMessage,
                status: 'sent'
            }
            this.data.contacts[this.currentIndex].messages.push(message);
            this.cleanMessage();
            this.reciveMessage();
        },

        cleanMessage () {
            this.newMessage = '';
        },

        reciveMessage() {
            setTimeout(() => {
                const message = {
                    date: new Date().toLocaleString(),
                    text: 'Va bene',
                    status: 'received'
                }
                this.data.contacts[this.currentIndex].messages.push(message);

            }, 1000)
        }
    }
        
 });

app.mount('#chat-box');