let json = `{
    "nombre" : "Leopoldo",
    "apellido" : "Muñoz",
    "vive" : true,
    "edad" : 29,
    "direccion" : {
        "calle" : "14 sur",
        "ciudad": "Puebla",
        "codigoPostal" : "72100",
        "numerosTelefono" : [
            {
                "tipo" : "Oficina",
                "numero" : "212 555 1234"
            },
            {
                "tipo" : "Casa",
                "numero" : "656 652 0147"
            },
            {
                "tipo" : "Celular",
                "numero" : "833 321 4567"
            }
        ]
    }
}`;

let ponente = JSON.parse(json);
console.log(ponente.nombre);
console.log(json.replace(/\s/g,''));