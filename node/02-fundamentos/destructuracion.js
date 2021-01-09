let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

/* 
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder; */

let { nombre: firstName, apellido, poder } = deadpool;

console.log(firstName, apellido, poder);