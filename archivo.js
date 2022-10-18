/*//const ESPACIO= " " 
//let mensaje = "¿Estas listo? ¡Vamos a aprender! :)";
//alert(mensaje);

let nombreDeUsuario = prompt("Ingresa tu nombre completo");
let apellidoDeUsario = prompt("Ingresa tu Apellido");

if((nombreDeUsuario !="")&& (apellidoDeUsario != "")){
    alert(`Bienvenido al sistema ${nombreDeUsuario} ${apellidoDeUsario}`)
}else{
    alert("¡Debe ingresar nombre y apellido para continuar!" );

}


let  anioNacimiento = parseInt(prompt("Por favor ingresa el año de tu nacimiento"));
if (anioNacimiento <= 2004){
    alert("buenisimo, ya eres mayor de edad")
}else{
    alert(" Para poder ingresar debes ser mayor de 18 años")
}
 Primer entrega 
for(let i = 1; i <=3 ; i++){
    let palabra = prompt("Escribe como se dice CASA en ingles").toLocaleLowerCase();
    if ((palabra == "home")){
        alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
        break;
     }else{
        alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
     }
    
    }
    for(let i = 1; i <=3 ; i++){
        let palabra = prompt("Escribe como se dice PERRO en ingles (letras minusculas)");
        if ((palabra == "dog")){
            alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
            break;
         }else{
            alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
         }
        
        }
    for(let i = 1; i <=3 ; i++){
            let palabra = prompt("Escribe como se dice MESA en ingles)").toLowerCase();
            if ((palabra == "table")){
                alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
                break;
             }else{
                alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
             }
            
            }
    for(let i = 1; i <=3 ; i++){
                let palabra = prompt("Escribe como se dice GATO en ingles").toLowerCase();
                if ((palabra == "cat")){
                    alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
                    break;
                 }else{
                    alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
                 }
                
                }
    for(let i = 1; i <=3 ; i++){
        let palabra = prompt("Escribe como se dice AUTO en ingles").toLowerCase();
         if ((palabra == "car")){
            alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
            break;}else{
                    alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
                     }
                     }


let traducir = prompt(" Ingresa que parte de tu cuerpo queres saber en ingles (x para salir)")
while(traducir != "x"){ 
switch (traducir){
       case "manos":
       case "mano": 
       alert("la palabra ingresada se escribe HANDS/plural HAND/singular (x para salir) ")
       break;
       case "pies":
       case "pie:":
        alert("la palabra ingresada es FOOT/pie  o FEET/pies  (x para salir)")
        break;
        case "ojos":
        case "ojo":
        alert("la palabra ingresada se escribe EYES/plural EYE/singular (x para salir)")
        break;
        case "cabeza":
        alert("la palabra ingresada se escribe HEAD (x para salir)")
        break;
        case "hombros":
        alert("la palabra ingresada se escribe SHOULDERS (x para salir)")
        break;
        case "pierna":
        alert("la palabra ingresada se escribe LEGS (x para salir)")
        break;
        case "brazos":
        alert("la palabra ingresada se escribe ARMS (x para salir)")
        break;
        case "dedos":
        alert("la palabra ingresada se escribe FINGERS (x para salir)")
        break;
        default:
        alert("Lo sentimos no contamos con esa palabra. Probá con otra y segui aprenidendo (x para salir)")
        break;   
} traducir = prompt(" Ingresa que parte de tu cuerpo queres saber en ingles")
}

//funcion

function seleccionarOpcion (opcionUno, opcionDos, palabraTraducida){
   for(let i = 1; i<=3 ; i++){
    let dato = prompt("Escribí la forma correcta en que se escribe el verbo"+ ESPACIO+ palabraTraducida+". Las opciones son: "+opcionUno+" o " +opcionDos) 
    if(dato == opcionUno){
        alert("correcto. Continua con el siguiente verbo. ")
        break;
    }else{
        alert("No es correcto. Restan"+ ESPACIO +(3-i)+ ESPACIO+ " intentos.")
    }} }

seleccionarOpcion ("eat", "drink", "COMER");
seleccionarOpcion ( "drive","ride","CONDUCIR");
seleccionarOpcion ( "run","walk","CORRER");
seleccionarOpcion ( "cook","sleep","COCINAR");
*/


class producto{
    constructor(codigo,  articulo, precio, descripcion, stock, marca){
        this.codigo= codigo;
        this.articulo= articulo;
        this.precio= precio;
        this.descripcion= descripcion;
        this.stock= stock;
        this.marca = marca;

    }
    restaStock(){
        this.stock= this.stock - 1;
        console.log(`el estock de ${this.articulo} ha sido actualizado`)
    }
}

const producto0 = new producto(2410, "Mascara de Pestañas", 850, " color negro", 5, "mac");
const producto1 = new producto(2200, "Base de maquillaje ", 1250, " Liquida", 20, "nars");
const producto2 = new producto(2312, "Labial", 1200, "Color Rosa", 30, "maybelline");
const producto3 = new producto(2528, "Labial", 1200, " Color Rojo", 15, "maybelline");
const producto4 = new producto(2840, "Iluminador", 2000, "Glow", 5, "mac");
const producto5 = new producto(2510, "Delineador", 600, "Color Negro", 8, "mac");


//array

const listaDeProductos = [producto0, producto1, producto2, producto3, producto4, producto5]



listaDeProductos.forEach((elemento)=> console.log(elemento))


let mensajePantalla = "Ingresa el código del producto que deseas. \n";
for( maquillaje of listaDeProductos){
   mensajePantalla += ` Código ${maquillaje.codigo}- ${maquillaje.articulo}: ${maquillaje.descripcion}, Valor $ ${maquillaje.precio}\n `
}

let elegir = prompt(mensajePantalla)

const productoElegido = listaDeProductos.find((elemento) => elemento.codigo== elegir)
if(productoElegido != undefined){ 
alert( `Te vas a llevar ${productoElegido.articulo}  ${productoElegido.descripcion} a $ ${productoElegido.precio} `)
}else{
    alert(" Por el momento no tenemos ese producto  en stock")
}



let mensajePantallaDos = "Ingresa la marca del producto que deseas. \n";
for( maquillaje of listaDeProductos){
   mensajePantallaDos += ` Código ${maquillaje.codigo}- ${maquillaje.articulo}: ${maquillaje.descripcion}, Valor $ ${maquillaje.precio} ${maquillaje.marca}   \n `
}
let elegirPorMarca = prompt (mensajePantallaDos).toLowerCase();

const buscarPorMarca = listaDeProductos.filter((articulo) => articulo.marca == elegirPorMarca );

let mostrar = "Encontramos de la marca que escogiste:\n" 
    for( const prod of buscarPorMarca){
        mostrar += elegirPorMarca +` ${prod.articulo}  ${prod.precio} \n`
    }
    console.log( buscarPorMarca);
    alert(mostrar);



    const stock = listaDeProductos.reduce((cantidad,articulo)=>cantidad + articulo.stock, 0)
    console.log("total de productos en stock"+stock) 