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
        
    }
        
 });

app.mount('#chat-box');