new Vue({
    el: '#app-nav',
    data:{
        select: 'people',
        query: '',
        img: {
            logo: './logoVue.png',
            search: './search-icon.png'
        },
        resultados:[]
    },
    methods: {
        Buscar: function() {
            fetch(`https://swapi.co/api/${this.select}/?search=${this.query}`)
            .then(respuesta => respuesta.json())
            .then(respuesta => console.log(respuesta));
        }
    }
})