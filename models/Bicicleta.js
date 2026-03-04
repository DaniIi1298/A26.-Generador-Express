let Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion || [0,0];
}

// Array en memoria
Bicicleta.allBicis = [];

// Añadir bicicleta
Bicicleta.add = function(bici){
  this.allBicis.push(bici);
}

// Buscar por id
Bicicleta.findById = function(id){
  for(let i=0; i < this.allBicis.length; i++){
    if(this.allBicis[i].id === id) return this.allBicis[i];
  }
  return null;
}

// Borrar por id
Bicicleta.removeById = function(id){
  for(let i=0; i < this.allBicis.length; i++){
    if(this.allBicis[i].id == id){
      this.allBicis.splice(i,1);
      return true;
    }
  }
  return false;
}

// Actualizar
Bicicleta.update = function(id, datos){
  let bici = this.findById(id);
  if(!bici) return null;
  if(datos.color !== undefined) bici.color = datos.color;
  if(datos.modelo !== undefined) bici.modelo = datos.modelo;
  if(Array.isArray(datos.ubicacion) && datos.ubicacion.length===2) bici.ubicacion = datos.ubicacion;
  return bici;
}

// Datos "hardcodeados" de ejemplo
let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;