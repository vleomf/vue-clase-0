let tweet__cabecera = {
    props: ['usuario'],
    template: '#tweet__cabecera'
};

let tweet__contenido = {
    props: ['mensaje'],
    template: '#tweet__contenido'
};

let tweet__pie = {
    template: '#tweet__pie',
    data: function()
    {
        return {
            fecha: new Date().toLocaleString(),
            like: false,
            corazonUrl: './img/heart-512.png'
        }
    },
    methods: {
        CambiarCorazon: function()
        {
           if(this.like)
           {
               this.corazonUrl = './img/heart-512.png';
           }
           else
           {
                this.corazonUrl = './img/favorite-512.png';
           }

           this.like = !this.like;
        }
    }
};


Vue.component('tweet', {
    props: ['tweet'],
    template: '#tweet',
    components: {
        'tweet__cabecera'  :  tweet__cabecera,
        'tweet__contenido' : tweet__contenido,
        'tweet__pie'       : tweet__pie
    }
});


new Vue({
    el: '#app',
    data: {
        tweets: [
            {
                usuario: {
                    nombre: 'Elon Musk',
                    alias:  'elonM',
                    img: './img/elon_musk.jpeg'
                },
                msg: 'Hola soy Elon.'
            },
            {
                usuario: {
                    nombre: 'Jeff Bezos',
                    alias:  'IAmNotJeff',
                    img: './img/jeff-bezzos.jpg'
                },
                msg: 'https://viceo.github.io'
            }
        ]
    }
})