let compra = prompt("Bienvenido a Almacén Sin Gluten. ¿Desea efectuar una compra? Si o No")

if (compra === "Si" || compra === "si") {
    alert("Procede a elegir tus productos")
}else if (compra === "No" || compra === "no") {
    alert("Lamentamos que no te interesen nuestros productos. Hasta la proxima.")
}else(alert("Ingresa una opción valida. Recarga la pestaña."))

if (compra === "Si" || compra === "si") {
    let carritoDeCompras = prompt("Elegí de nuestra lista de Productos: \1.Pan Baguette: $230 \2.Red Velvet: $4180 \3.Croissants: $290 \4.Pan de Ají: $410 \5.Scons de Queso: $410 \6.Cheesecake: $5180")
    switch (carritoDeCompras) {
        case "1":
            alert("Compraste Pan Banguette")
            compra += 230;
        break;
        case "2":
            alert("Compraste Red Velvet")
            compra += 4180;
        break;
        case "3":
            alert("Compraste Croissants")
            compra += 290;
        break;
        case "4":
            alert("Compraste Pan de Ají")
            compra += 410;
        break;
        case "5":
            alert("Compraste Scons de Queso")
            compra += 410;
        break;
        case "6":
            alert("Compraste Cheesecake")
            compra += 5180;
        break;    
        default:
            alert("Elije un producto de la lista por favor.")
        break;
    }
    carritoDeCompras = prompt("Por si necesitas algo más: \1.Pan Baguette: $230 \2.Red Velvet: $4180 \3.Croissants: $290 \4.Pan de Ají: $410 \5.Scons de Queso: $410 \6.Cheesecake: $5180")
}else{
    alert("Tú compra es de $ " + compra);
    alert("Gracias por tú compra. Vuelve pronto.")
} 
