console.table(artesania);
let listaProds=[];
let totalGastos=0;

function filtrarporPrecio(precioMax){
    const filtros=artesania.filter((artesanias)=>artesanias.precio<=precioMax);
    return filtros;
}
let precioMaxUsu= parseFloat(prompt('Ingrese el precio máximo que desea abonar(0-salir)'));
while(precioMaxUsu!=0){
    if(isNaN(precioMaxUsu)||precioMaxUsu<0){
        alert('Error, ingrese un precio válido🤷‍♀️');  
    }else{
        const artesFiltrados = filtrarporPrecio(precioMaxUsu);
        console.table(artesFiltrados);
    }
    precioMaxUsu=parseFloat(prompt('Ingrese el precio máximo que desea abonar(0-salir)'));
} 

let opcion=prompt('quieres agregar nueva artesania al carrito?(s/n)🤔');
while(opcion!='n'){
    let prodNuevo=prompt('ingrese nueva artesania al carrito');
listaProds.push(prodNuevo);
opcion=prompt('Quisieras agregar una nueva artesania al carrito?🤔(s/n)');
}

function incrementarGastoTotal(monto){
    totalGastos+=monto;
}

function renderizarProductos(listaProds){
    for(const prod of listaProds){
        contenedorProds.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${prod.foto} alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">${prod.precio}</p>
        <a href="#" class="btn btn-primary comprar">Comprar</a>
        </div>
    </div>
        `;
    }
}
