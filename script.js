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
        
        // Partiamo da un currentIndex 0, per poter girare nella lista contatti, ho bisogno che l'index cambi in base al valore dell'i dell'array, per cui mi creo una funzione che renda il currentIndex lo stesso valore della i. Avendo creato un ciclo v-for per stampare nel DOM tutti i contatti, l'index sarà la i del v-for.
        goTo(index) {
           this.currentIndex = index;
        },

        // Questa funzione mi permette di inviare un messaggio. Creo una variabile di appoggio (message) e gli imposto le stesse chiavi presenti per i messaggi nel database (date, text, status). Per la data, mi prendo la data corrente e la formatto tramite .toLocaleString, il testo lo prelevo dal v-model precedentemente impostato nell'imput (newMessage) e come status imposto 'sent' visto che sono messaggi che sto inviando io. Dopo di che pusho tutto nell'array. Una volta pushato, pulisco il campo e mi faccio rispondere randomicamente dalle altre due funzioni.

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
            const messages = ["Va bene", "Ok", "Non ho capito", "Certamente", "Puoi ripetere?", "Non ho voglia di sentirti", "Scrivimi tra un po', sto lavorando"];
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        },
        
        // Tramite questa funzione, ciclo in data.contacts andandomi a modificare il contact.visible in base a quello che cerco nella barra di ricerca. Per farlo funzionare, richiamo questa funzione con un @keyup nell'HTML, in maniera che ogni tasto cliccato mi dà la corrispondenza in tempo reale tra quello che digito e quello che compare nella lista contatti.
        filter() {
            this.data.contacts.forEach(contact => {
               contact.visible = contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        deleteMessage(i){
            this.data.contacts[this.currentIndex].messages.splice(i, 1);
        },
    }
        
 });

app.mount('#chat-box');