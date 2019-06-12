new Vue({
    el: '#app-nav',
    data:{
        select: 'people',
        query: '',
        img: {
            logo: './logoVue.png',
            search: './search-icon.png'
        }
    },
    methods: {
        Buscar: function() {
            fetch(`https://swapi.co/api/${this.select}/?search=${this.query}`)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                prev_next.SetPrevNext(
                    respuesta.previous, 
                    respuesta.next, 
                    respuesta.count);
                main.SetResultados(this.select, 
                    respuesta.results);
            });
        }
    }
});

let main = new Vue({
    el: '#app-main',
    data:{
        select: '',
        resultados:[],
        cabeceras:[]
    },
    methods: {
        SetResultados: function(select, resultados)
        {
            this.select = select;
            this.resultados = resultados;

            switch(select)
            {
                case 'people':
                    this.cabeceras = ['Nombre', 'G&eacute;nero', 'Fecha Nacimiento'];
                    break;
                case 'films':
                    this.cabeceras = ['T&iacute;tulo', 'Director', 'No. Episodio'];
                    break;
                case 'starships':
                    this.cabeceras = ['Nombre', 'Modelo', 'Velocidad de Hyperdrive'];
                    break;
                case 'vehicles':
                    this.cabeceras = ['Nombre', 'Modelo', 'M&aacute;xima Velocidad Atmosf&eacute;rica'];
                    break;
                case 'species':
                    this.cabeceras = ['Nombre', 'Clasificaci&oacute;n', 'Lenguaje'];
                    break;
                case 'planets':
                    this.cabeceras = ['Nombre', 'Gravedad', 'Clima'];
            }
        }
    }
});

let prev_next = new Vue({
    el: '#prev-next',
    data: {
        previous: null,
        next: null,
        count: 0
    },
    methods:{
        SetPrevNext: function(previous, next, count)
        {
            this.previous = previous;
            this.next = next;
            this.count = count;
        },
        Actualizar: function(url)
        {
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                this.SetPrevNext(
                    respuesta.previous, 
                    respuesta.next, 
                    respuesta.count);
                main.SetResultados(main.select, 
                    respuesta.results);
            });
        }
    }
});