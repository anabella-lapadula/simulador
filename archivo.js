const ESPACIO= " " 
let mensaje = "¿Estas listo? ¡Vamos a aprender! :)";
alert(mensaje);

let nombreDeUsuario = prompt("Ingresa tu nombre completo");
let apellidoDeUsario = prompt("Ingresa tu Apellido");

if((nombreDeUsuario !="")&& (apellidoDeUsario != "")){
    alert("¡Bienvenido al sistema "+nombreDeUsuario+ ESPACIO+apellidoDeUsario+"!")
}else{
    alert("¡Debe ingresar nombre y apellido para continuar!" );
}

let  anioNacimiento = parseInt(prompt("Por favor ingresa el año de tu nacimiento"));
if (anioNacimiento <= 2004){
    alert("buenisimo, ya eres mayor de edad")
}else{
    alert(" Para poder ingresar debes ser mayor de 18 años")
}

for(let i = 1; i <=3 ; i++){
    let palabra = prompt("Escribe como se dice CASA en ingles (letras minusculas)");
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
            let palabra = prompt("Escribe como se dice MESA en ingles (letras minusculas)");
            if ((palabra == "table")){
                alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
                break;
             }else{
                alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
             }
            
            }
    for(let i = 1; i <=3 ; i++){
                let palabra = prompt("Escribe como se dice GATO en ingles (letras minusculas)");
                if ((palabra == "cat")){
                    alert("Excelente podes continuar con la siguiente palabra y seguir aprendiendo")
                    break;
                 }else{
                    alert("la palabra ingresada no es correcta. Restan"+ ESPACIO+  (3-i)+ ESPACIO+ "intentos.")
                 }
                
                }
    for(let i = 1; i <=3 ; i++){
        let palabra = prompt("Escribe como se dice AUTO en ingles (letras minusculas)");
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

