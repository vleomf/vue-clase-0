let ponente = {
    nombre: 'Leopoldo',
    apellido: 'Muñoz',
    vive: true,
    edad: 29,
    direccion: {
        calle: '14 Sur',
        ciudad: 'Puebla',
        estado: 'Puebla',
        codigoPostal: '72100',
        numerosTelefono:[
            {
                tipo: 'Oficina',
                numero: '212 555 1234'
            },
            {
                tipo: 'Casa',
                numero: '656 652 0147'
            },
            {
                tipo: 'Celular',
                numero: '833 321 4567'
            }
        ]
    },
    fechaNacimiento: function()
    {
        return new Date().getFullYear() - this.edad;
    }
};

console.log(ponente.fechaNacimiento());