new Vue({
    el: '#app',
    data: {
        usuario: '',
        contrasena: ''
    },
    methods:{
        Autenticar: function()
        {
            let usuario    = 'leopoldo';
            let contrasena = 'contrasena1234';

            if(this.usuario != usuario || this.contrasena != contrasena)
            {
                this.$refs.Alerta.classList.add('Alerta--error');
                this.$refs.Alerta.innerText = "Acceso NO autorizado";
                return;
            }
            this.$refs.Alerta.classList.remove('Alerta--error');
            this.$refs.Alerta.classList.add('Alerta--ok');
            this.$refs.Alerta.innerText = "Acceso autorizado";
        },
        Limpiar: function()
        {
            this.usuario    = '';
            this.contrasena = '';
            this.$refs.Alerta.classList = ['Alerta'];
            this.$refs.Alerta.innerText = "";
        }
    }
});