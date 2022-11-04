//Primera Pre Entrega

/*const edad = 18;

const saludo = alert ("¡Bienvenido a Almacen Sin Gluten!");
let edadIngresada = parseInt( prompt ("Ingrese su edad:"));
let repetir = true;

function controlDeEdad (edadIngresada) {
    return (18 <= edadIngresada)
};
if (controlDeEdad(edadIngresada)) {
    alert ("Ahora sí puedes comenzar a cargar el carrito.");
    repetir = false;
}
while (repetir){
    if(isNaN(edadIngresada)){
        edadIngresada = parseInt(prompt("Por favor, ingrese un número válido."));
        continue
    }else if(controlDeEdad(edadIngresada)) {
        alert ("Ahora sí puedes comenzar a cargar el carrito.");
        repetir = false;
    }else{ 
        alert ("Eres menor de edad. No te podemos dejar comprar sin permiso de un adulto.");
        repetir = false;
    }
}*/

//Segunda Pre Entrega

const productosAlmacenSinGluten = [
    {
        id: 1,
        nombre: "Pan Baguette",
        precio: 230,
        stockDisponible: 15,
    },
    {
        id: 2,
        nombre: "Red Velvet",
        precio: 4180,
        stockDisponible: 2,
    },
    {
        id: 3,
        nombre: "Croissant",
        precio: 290,
        stockDisponible: 20,
    },
    {
        id: 4,
        nombre: "Torta Mousse de Chocolate",
        precio: 3850,
        stockDisponible: 1,
    },
    {
        id: 5,
        nombre: "Pan Multisemillas",
        precio: 410,
        stockDisponible: 7,
    },
    {
        id: 6,
        nombre: "Scons de Queso",
        precio: 250,
        stockDisponible: 17,
    },
];

let valorDeBusqueda = "Scons de Queso"
const busqueda = productosAlmacenSinGluten.find(productosAlmacenSinGluten => productosAlmacenSinGluten.nombre === valorDeBusqueda)
console.log(busqueda)




// const panBaguette = 230;
// const redVelvet = 4180;
// const croissant = 290;

// const promoUno = panBaguette + croissant;
// const promoDos = redVelvet + croissant;
// const promoTres = panBaguette + redVelvet + croissant;

//function = costoTotal
//Parametros de la function = (panBaguette,redVelvet,croissant,costo) => para que funcione la function tienen que cumplirse todos los parametros
//Por prompt elejir los productos y por switch que se vayan sumando:
//Por prompt elejir el medio de pago, segun lo elejido habra recargos o no
//Segun la suma de productos por switch y el medio de pago elejido aplicar recargos o descuentos

//     let carrito = 0;
//         let productos = prompt("Elige tus productos: \n1.Pan Baguette\n2.Red Velvet\n3.Croissant")
//         switch (productos) {
//             case "1":
//                 alert(`Elegiste Pan Baguette $${panBaguette}`);
//                 carrito += panBaguette;
//                 break;
//             case "2":
//                 alert(`Elegiste Red Velvet $${redVelvet}`);
//                 carrito += redVelvet;
//                 break;
//             case "3":
//                 alert(`Elegiste Croissant $${croissant}`);
//                 carrito += croissant;
//                 break;
//             default:
//                 alert("Elige una opción válida.")
//                 break;
//         }


//     let medioDePago = prompt("Elige tú medio de pago: \n1.Efectivo: descuento del 10%\n2.Debito: recargo del 10%\n3.Credito: recargo del 20%\n4.Transferencia: recargo del 5%")
//         switch (medioDePago) {
//             case "1":
//                 alert("Elegiste pago en Efectivo");
//                 carrito * 0.9;
//                 break;
//             case "2":
//                 alert("Elegiste pago con Debito");
//                 carrito * 1.10;
//                 break;
//             case "3":
//                 alert("Elegiste pago con Credito");
//                 carrito * 1.2;
//                 break;
//             case "4":
//                 alert("Elegiste Transferencia")
//                 carrito * 1.05
//                 break;
//             default:
//                 alert("Elige una opción válida.")
//                 break;
//         }