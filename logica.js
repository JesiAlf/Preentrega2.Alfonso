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

class Artesanias{
    arteNew(id,foto,producto,precio){
        this.id=id;
        this.foto=foto;
        this.producto=producto;
        this.precio=precio;
    }
    mostrarArtesania(){
        alert(this.id+'5'+this.foto+"https://blogger.googleusercontent.com/img/a/AVvXsEhqJtDNzJlV0QiySi6ZNPQbE8J0nwcV1G4fBahtfqFn8itp5DHj_OAo00nVWRHhEx8rrAA-pH4ehMRRIXkspkcftQ-wgf4ObcmV_ZB-fjEu38ITAqTOZeiEITb-s8GpX2ckDLPRoJFsiIqIe9xOWPFswZnY7qlWTjzHwZblGuFISHYzzJgLAk5-L8roE08"+this.producto+'Tapizado macramé hojas'+this.precio+'5000');
    }
}
const artesania1=new Artesanias(5,"https://blogger.googleusercontent.com/img/a/AVvXsEhqJtDNzJlV0QiySi6ZNPQbE8J0nwcV1G4fBahtfqFn8itp5DHj_OAo00nVWRHhEx8rrAA-pH4ehMRRIXkspkcftQ-wgf4ObcmV_ZB-fjEu38ITAqTOZeiEITb-s8GpX2ckDLPRoJFsiIqIe9xOWPFswZnY7qlWTjzHwZblGuFISHYzzJgLAk5-L8roE08", "Tapizado macramé hojas", 5000);

artesania1.mostrarArtesania();


/*const arteNew1= new artesania(5,"https://blogger.googleusercontent.com/img/a/AVvXsEhqJtDNzJlV0QiySi6ZNPQbE8J0nwcV1G4fBahtfqFn8itp5DHj_OAo00nVWRHhEx8rrAA-pH4ehMRRIXkspkcftQ-wgf4ObcmV_ZB-fjEu38ITAqTOZeiEITb-s8GpX2ckDLPRoJFsiIqIe9xOWPFswZnY7qlWTjzHwZblGuFISHYzzJgLAk5-L8roE08", "Tapizado macramé hojas", 5000);
const arteNew2= new artesania(6,"https://blogger.googleusercontent.com/img/a/AVvXsEhv67JRF2uNkvvKSMdbvV4rx_HO8pkCXzDdBKzvo5gRBuuDm5mLB9_oUvCoh6iUicvSgm-zt2B6Jt5McaCbrERwjPmot9vkZ7IEvYXNp2xI1qPmOGMi5ycQARItr2x_7_fSKQC1i7j9iSmMgpITRw_64ojditlSvOqQkSSG2Meq8yERijlRMjtSZ9vK1zE", "Reloj elefante en vinilo calado artesanal", 3500);

artesania.push(arteNew1);
artesania.push(arteNew2);



function renderizarProductos(artesania){
    for(const prod of artesania){
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
}*/
