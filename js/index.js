//Primera Pre Entrega

const edad = 18;

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
    }

//Segunda Pre Entrega

const productosAlmacenSinGluten = [
    {id: 1, nombre: "Pan Baguette", precio: 230, stockDisponible: 15,},
    {id: 2, nombre: "Red Velvet", precio: 4180, stockDisponible: 2},
    {id: 3, nombre: "Croissant", precio: 290, stockDisponible: 20},
    {id: 4, nombre: "Torta Mousse de Chocolate", precio: 3850, stockDisponible: 1},
    {id: 5, nombre: "Pan Multisemillas", precio: 410, stockDisponible: 7},
    {id: 6, nombre: "Scons de Queso", precio: 250, stockDisponible: 17},
];

let valorDeBusqueda = "Scons de Queso"
const busqueda = productosAlmacenSinGluten.find(productosAlmacenSinGluten => productosAlmacenSinGluten.nombre === valorDeBusqueda)
console.log(busqueda)

for(const productos of productosAlmacenSinGluten){
    console.log(`¡Excelente! Elegiste ${productos.nombre}, cuyo precio es $${productos.precio} y hay un stock de ${productos.stockDisponible} unidades.`)
}