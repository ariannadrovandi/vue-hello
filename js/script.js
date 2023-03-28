const {createApp} = Vue;

createApp({
    data(){
        return { 
            titolo: 'Hello Vue!',
            myclass: 'title',
            myclass2: 'ad-image',
            image: 'https://digitalya.co/blog/wp-content/uploads/2022/08/vue-js-methods-demistified@3x-8.png'
        }
    },
    
}).mount('#app');