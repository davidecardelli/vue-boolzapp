console.log('vue ok', Vue);

const app = Vue.createApp({

    data() {
        return {
         currentIndex: 0,
         data,
         newMessage: '',
        }
    },

    methods: {
        
        // Cambio del currentIndex che userò per girare nella lista delle conversazioni. 
        goTo(index) {
           this.currentIndex = index;
        },
        
        // Ternario che mi risponde se il messaggio è stato ricevuto o meno.
        isRecived(i){
            return this.data.contacts[this.currentIndex].messages[i].status === 'received'
        }
    }
        
 });

app.mount('#chat-box');