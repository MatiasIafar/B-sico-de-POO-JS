// Objeto Literal
const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprobados: [
    'Curso Definitivo de html y css',
    'Curso de JS'
  ],
  // Metodo
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push('nuevoCursito')
  }
}
// Hacer que natalia apruebe otro curso.

natalia.cursosAprobados.push('Curso de Responsive con CSS')

console.log(natalia)

// Prototipos 

function Student(name, age, cursosAprobados) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados
  
}

Student.prototype.aprobarCurso = function(nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito)
}

const juanita =  new Student('Juanita', 15, ['Curso de Introduccion a Videojuegos', 'Curso de Creacion de Personajes'])

console.log(juanita);