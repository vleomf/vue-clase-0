//  Componente global
let ElementoLista = {
    props:['pendiente'],
    template:`<li class="lista__elemento">
        <span>{{pendiente}}</span>
        <button v-on:click="Remover">Remover</button>
    </li>`,
    methods:
    {
        Remover: function()
        {
            let idNodo = this.$vnode.key;
            this.$emit('remover-elemento-lista', idNodo);
        }
    }
};

let NuevaTarea = {
    data: function()
    {
        return {
            tarea: ''
        }
    },
    template:`<div class="lista-nuevaTarea">
        <input 
            v-model="tarea"
            type="text" placeholder="Escribe Tarea"/>
        <button
            v-on:click="Agregar">
            Agregar</button>
    </div>`,
    methods:{
        Agregar: function()
        {
            this.$emit('agregar-elemento-lista', this.tarea);
        }
    }
};

// Componente global
Vue.component('lista', {
    data: function() {
        return {
            pendientes: ['Aprender Vue', 'Terminar Verano']
        }
    },
    components:{
        'lista-nuevaTarea' : NuevaTarea,
        'lista-elemento' : ElementoLista
    },
    template:`<div class="lista">
        <h1>Lista de Tareas</h1>
        <lista-nuevaTarea 
            v-on:agregar-elemento-lista="AgregarElementoLista"/>
        <ul>
            <lista-elemento 
                v-for="(pendiente, indx) in pendientes"
                v-bind:key="indx"
                v-bind:pendiente="pendiente"
                v-on:remover-elemento-lista="RemoverElementoLista"/>
        </ul>
    </div>`,
    methods:{
        RemoverElementoLista: function(id)
        {
            this.pendientes.splice(id, 1);
        },
        AgregarElementoLista: function(tarea)
        {
            this.pendientes.push(tarea);
        }
    }
});

//  Instancia de aplicacion
new Vue({
    el: '#app'
});



