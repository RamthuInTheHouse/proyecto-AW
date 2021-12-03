let productos =[];
let total = 0;  

function add (Producto, Precio) {
    console.log (Producto, Precio);
    productos.push (Producto);
    total = total + Precio
    document.getElementById ("checkout").innerHTML = total
}
function pagar () {
    window.alert(productos.join(",/n"));
} 	