//let sumar = (a, b) => a + b;

/* const saludar = nombre => `Hola ${nombre}`;

console.log(saludar('Fernando')); */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

//console.log(sumar(10, 20));