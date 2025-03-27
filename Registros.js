//esta el la funcion del menu en la cual a travez de la opcion que se seleccione se realizara el caso elegido
function menu(){
    let opcion;
do{
    // es el menu que le aparecera al usuario
    opcion = prompt("bienvenido al menu \n Elige la opcion que desees realizar: \n 1.- ingresar un nuevo registro \n 2.- salir del programa ");

    switch(opcion){
        case '1':
             RegistroDeUsuarios();
        
        break
    case '2':
        alert("gracias por usar el programa");
        break;
    default:
        alert("la opcion que desea realizar no esta dentro del menu");
        alert("intente otra opcion");
    break;
    }
}while(opcion !== 2);

}

menu();


// esta es la funcion para que se genere una contraseña que sea aleatoria tomando en cuenta 
// que se tenga mayusculas, minusculas,numeros y caracteres especiales
function ContrasenaAleatoria() {
    // en esta variable se establecen como contantes todos los caracteres que puedes ser incluidos dentro del la contraseña
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    contrasena = "";
    // se establecen las variables con las cuales se va a comprobar que se esta colocando los carateres 
    let Mayusculas = false;
    let Minusculas = false;
    let Numeros = false;
    let caracter = false;

    // en esta condicion genero que la contraseña sea aleatoria a travez de la funcion math.ramdom

    while (!Mayusculas || !Minusculas || !Numeros || !caracter) {
        contrasena = "";
        for (let i = 0; i < 16; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            const char = caracteres.charAt(indice);
         contrasena += char;

            if (/[A-Z]/.test(char)) Mayusculas = true;
            if (/[a-z]/.test(char)) Minusculas = true;
            if (/\d/.test(char)) Numeros = true;
            if (/[!@#$%^&*()_+]/.test(char)) caracter = true;
        }
    }
    
    return contrasena;
}

// esta es la funcion para poder colocar usuarios dentro de una funcion a travez de un array para asi poder imprimirlos en una tabla
function RegistroDeUsuarios() {
    // son las vriables que se tomaran en cuenta 
    let nombre =" ";
    let edad =" ";
    let curp =" ";
    const GuardarUsuarios = [];  // este es el array en el cual se va a guardar la informacion

    // Menú para ingresar usuarios, repite hasta que el usuario decida no agregar más
    let cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios deseas registrar?"));
    
    for (let i = 0; i < cantidadUsuarios; i++) {
         nombre = prompt("Ingrese su nombre:");
         
         do {
            edad = prompt("Ingrese su edad:");

            if (isNaN(edad) || edad <= 0) {
                alert("Por favor, ingrese una edad válida (número mayor a 0).");
            }
        } while (isNaN(edad) || edad <= 0); 


        curp = prompt("Ingrese su CURP:");

        // se llama a la funcion contraseña aleatoria para que se realize de forma automatica
        const contrasena = ContrasenaAleatoria();

        // se crea el Json y se establecen que se va a colocar dentro de mismo que seran las variables que ya se declararon
        const usuario = {
            nombre: nombre,
            edad: edad,
            curp: curp,
            contrasena: contrasena
        };

       // se guardan los usuarios que coloquemos 
       GuardarUsuarios.push(usuario);
    }

    // a travez de esta opcion se generara una tabla dentro de la consola en la cual se veran reflejados todos los registros
    console.table(GuardarUsuarios);
}

