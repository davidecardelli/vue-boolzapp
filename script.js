console.log('vue ok', Vue);

const app = Vue.createApp({

    data() {
        return {
         currentIndex: 0,
         data,
        }
    },

    methods: {
        goTo(index) {
           this.currentIndex = index;
        },

        isRecived(i){
            return this.data.contacts[this.currentIndex].messages[i].status === 'received'
        }
    }
        
 });

app.mount('#chat-box');