var c = 1;
var b = "fredy";
//tipos de impresion por consola
console.log(c);
console.warn(b);
console.error(c);
console.info(b);
//datos primitivos
var num = 10;
var str = "texto";
var bool = true;
var und = undefined;
var nul = null;
//objetos
var obj ={
  //propiedades
  numero: 10,
  texto: "nuevo texto"
};
//los datos promitivos se pasan variables por valor
//Los objetos siempre se pasan por referencia
var c ={
  nombre: "juana"
};
var d = c;
c.nombre = "maria";