//
const lista = document.querySelector(".lista");
const boton = document.querySelector(".boton");
let addProduct = ()=>{
    contador += 1;
    let li = document.createElement("li");
    li.textContent = "Producto "+ contador;
    lista.appendChild(li);
    alert("un producto se sumó al carrito")
}

let cleatProduct = ()=>{
    lista.innerHTML = ""
    contador= 0
    setTimeout(() => {
        alert("se limpio la lista") 
    }, 1000);
}