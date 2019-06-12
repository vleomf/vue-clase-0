function Direccion(calle, ciudad, estado, codigoPostal)
{
    this.calle        = calle;
    this.ciudad       = ciudad;
    this.estado       = estado;
    this.codigoPostal = codigoPostal;
}

function NumeroTelefono(tipo, numero)
{
    this.tipo   = tipo;
    this.numero = numero;
}

function Usuario(nombre, apellido, vive, edad)
{
    this.nombre   = nombre;
    this.apellido = apellido;
    this.vive     = vive;
    this.edad     = edad;

    this.direccion;
    this.numerosTelefono;

    this.fechaNacimiento = function()
    {
        return new Date().getFullYear() - this.edad;
    }
}

let ponente = new Usuario('Leopoldo', 'Muñoz', true, 29);
    ponente.direccion = Direccion('14 Sur', 'Puebla', 'Puebla', '72100');
    ponente.numerosTelefono = [
        new NumeroTelefono('Oficina', '212 555 1234'),
        new NumeroTelefono('Casa'   , '656 652 0147'),
        new NumeroTelefono('Celular', '833 321 4567')
    ];
    
console.log(ponente.fechaNacimiento());


