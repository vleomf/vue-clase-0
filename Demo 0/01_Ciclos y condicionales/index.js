let app = new Vue({
    el: '#app',
    data: {
        elementos:[
            {
                simbolo : 'He',
                nombre  : 'Helio',
                familia : 0
            },
            {
                simbolo : 'Ne',
                nombre  : 'Neón',
                familia : 0
            },
            {
                simbolo : 'Ar',
                nombre  : 'Argón',
                familia : 0
            },
            {
                simbolo : 'Kr',
                nombre  : 'Kriptón',
                familia : 0
            },
            {
                simbolo : 'Xe',
                nombre  : 'Xenón',
                familia : 0
            },
            {
                simbolo : 'Ra',
                nombre  : 'Radón',
                familia : 0
            },
            {
                simbolo : 'H',
                nombre  : 'Hidrógeno',
                familia : 2
            },
            {
                simbolo : 'Na',
                nombre  : 'Sodio',
                familia : 1
            },
            {
                simbolo : 'Sc',
                nombre  : 'Escandio',
                familia : 1
            },
        ]
    },
    methods: {
        getClaseFamilia: function(familia)
        {
            switch(familia)
            {
                case 0:
                return 'Elemento--azul-0';

                case 1:
                return 'Elemento--azul-1';

                case 2:
                return 'Elemento--naranja';
            }
        }
    }
});