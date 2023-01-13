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

    computed: {
        filter() {
            return this.data.contacts.filter( contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
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
            this.receivedMessage();
        },

        cleanMessage () {
            this.newMessage = '';
        },

        receivedMessage() {
            setTimeout(() => {
                const message = {
                    date: new Date().toLocaleString(),
                    text: this.randomMessage(),
                    status: 'received'
                }
                this.data.contacts[this.currentIndex].messages.push(message);

            }, 1000)
        },

        randomMessage() {
            const messages = ["Va bene", "Ok", "Non ho capito", "Certamente"];
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }
    }
        
 });

app.mount('#chat-box');