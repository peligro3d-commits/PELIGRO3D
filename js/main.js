// ================= PRODUCTOS =================

const productos = [

{nombre:"Soporte Celular", imagenes:["imagenes/producto1.png", "imagenes/producto2.png"], descripcion:"Ideal para escritorio.", categoria:"hogar", precio:8500, codigo:"0001", destacado:true},

{nombre:"Organizador Cocina", imagenes:["imagenes/producto23.png","imagenes/producto2b.png"], descripcion:"Orden para tu hogar.", categoria:"hogar", precio:12500, codigo:"0002", destacado:true},

{nombre:"Lapicero 3D", imagenes:["imagenes/producto3.png"], descripcion:"Perfecto para estudiantes.", categoria:"estudiante", precio:6000, codigo:"0003", destacado:true},

{nombre:"Regla Técnica", imagenes:["imagenes/producto4.jpg"], descripcion:"Accesorio útil.", categoria:"estudiante", precio:4500, codigo:"0004"},

{nombre:"Engranaje Repuesto", imagenes:["imagenes/producto5.jpg"], descripcion:"Repuesto técnico.", categoria:"repuestos", precio:15000, codigo:"0005"},

{nombre:"Piñón Técnico", imagenes:["imagenes/producto6.jpg"], descripcion:"Alta resistencia.", categoria:"repuestos", precio:22000, codigo:"0006"},

{nombre:"Figura Articulada", imagenes:["imagenes/producto7.jpg"], descripcion:"Juguete impreso en 3D.", categoria:"juguetes", precio:9000, codigo:"0007"},

{nombre:"Auto Miniatura", imagenes:["imagenes/producto8.jpg"], descripcion:"Modelo coleccionable.", categoria:"juguetes", precio:11000, codigo:"0008"}

];

// ================= MOSTRAR PRODUCTOS =================

function mostrarProductos(categoria){

    const contenedor = document.getElementById("contenedor-productos");
    const carrusel = document.getElementById("carrusel-container");
    const sobre = document.querySelector(".sobre");
    const titulo = document.querySelector(".titulo-destacados");
    const contacto = document.getElementById("contacto");

    if(titulo){
        titulo.style.display = categoria === "inicio" ? "block" : "none";
    }

    if(contacto){
        contacto.style.display = categoria === "inicio" ? "block" : "none";
    }

    if(!contenedor) return;

    if(categoria !== "inicio"){
        if(carrusel) carrusel.style.display = "none";
        if(sobre) sobre.style.display = "none";
    } else {
        if(carrusel) carrusel.style.display = "block";
        if(sobre) sobre.style.display = "block";
    }

    contenedor.innerHTML = "";

    let filtrados;

    if(categoria === "inicio"){
        filtrados = productos.filter(p => p.destacado === true).slice(0,4);
    }else{
        filtrados = productos.filter(p => p.categoria === categoria);
    }

    filtrados.forEach((producto, index) => {

        const div = document.createElement("div");
        div.className = "producto";

        // CREAR IMÁGENES DINÁMICAMENTE (soporta más de 2)
        let imagenesHTML = "";
        producto.imagenes.forEach((img, i) => {
            imagenesHTML += `
                <img src="${img}" class="img-producto" style="opacity:${i === 0 ? 1 : 0}">
            `;
        });

        div.innerHTML = `
            <div class="img-wrapper">
                ${imagenesHTML}
            </div>
            <h3>${producto.nombre}</h3>
            <p class="precio">$ ${producto.precio.toLocaleString()}</p>
        `;

        // ================= HOVER AUTO CAMBIO =================

       const imagenes = div.querySelectorAll(".img-producto");

if(imagenes.length > 1){

    let intervalo = null;
    let indiceImg = 0;

    div.addEventListener("mouseenter", () => {

    if(intervalo) return;

    const cambiarImagen = () => {
        const actual = imagenes[indiceImg];
        const siguiente = imagenes[(indiceImg + 1) % imagenes.length];

        actual.style.opacity = "0";
        siguiente.style.opacity = "1";

        indiceImg = (indiceImg + 1) % imagenes.length;
    };

    cambiarImagen(); // 👈 PRIMER CAMBIO INMEDIATO

    intervalo = setInterval(cambiarImagen, 1200);
});

    div.addEventListener("mouseleave", () => {

        clearInterval(intervalo);
        intervalo = null;

        imagenes.forEach((img, i) => {
            img.style.opacity = i === 0 ? "1" : "0";
        });

        indiceImg = 0;
    });
}

        // ================= CLICK MODAL =================

        div.addEventListener("click", () => {
            abrirModal(
                producto.nombre,
                producto.imagenes,
                producto.descripcion,
                producto.precio,
                producto.codigo
            );
        });

        contenedor.appendChild(div);

        // Animación de aparición suave
        setTimeout(() => {
            div.classList.add("mostrar");
        }, 100 * index);
    });
}



// ================= INICIO =================

function irInicio(){

    const carrusel = document.getElementById("carrusel-container");
    const sobre = document.querySelector(".sobre");

    if(carrusel) carrusel.style.display = "block";
    if(sobre) sobre.style.display = "block";

    mostrarProductos("inicio");
}

// ================= MENU =================

function toggleMenu(){

    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    const abierto = menu.classList.contains("abierto");

    if(abierto){
        cerrarMenuCompleto();
    }else{
        menu.classList.add("abierto");
        icono.classList.add("abierto");
    }
}

// ================= CARRUSEL =================

let indice = 0;
let indiceModal = 0;
let imagenesActuales = [];

function moverCarrusel(direccion){

    const carrusel = document.getElementById("carrusel");
    if(!carrusel) return;

    const totalSlides = carrusel.children.length;

    indice += direccion;

    if(indice < 0) indice = totalSlides - 1;
    if(indice >= totalSlides) indice = 0;

    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

// ================= AUTO START =================

document.addEventListener("DOMContentLoaded", function(){

    irInicio();

    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");


    setInterval(() => {
        moverCarrusel(1);
    }, 4000);

});


// ================= MODAL =================

function abrirModal(nombre, imagenes, descripcion, precio, codigo){

    document.getElementById("wppBtn").style.display = "none";

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const img = document.getElementById("modal-img");
    const precioTxt = document.getElementById("modal-precio");
    const desc = document.getElementById("modal-descripcion");
    const codigoTxt = document.getElementById("modal-codigo");
    const btn = document.querySelector(".btn-whatsapp");

    modal.style.display = "flex";

    titulo.innerText = nombre;

    imagenesActuales = imagenes;
    indiceModal = 0;

    img.src = imagenesActuales[0]; // siempre muestra la primera

    precioTxt.innerText = `Precio: $ ${precio.toLocaleString()}`;
    desc.innerText = descripcion;
    codigoTxt.innerText = `Código: ${codigo}`;

    const telefono = "5493413563549";
    const mensaje = `Hola! Quiero consultar por el producto: ${nombre} - Precio: $${precio}`;
    btn.href = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}

function actualizarBotonWhatsapp(){

    const boton = document.getElementById("wppBtn");
    const icono = document.getElementById("wppIcon");
    const contacto = document.getElementById("contacto");

    if(!boton || !icono) return;

    // 🔑 Si NO estamos en inicio → siempre amarillo
    if(!contacto || contacto.style.display === "none"){
        boton.style.background = "#FFD400";
        icono.src = "imagenes/wpp-negro.png";
        return;
    }

    // 🔑 Solo en INICIO evaluamos el contacto
    const rect = contacto.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.bottom >= 0){
        boton.style.background = "black";
        icono.src = "imagenes/wpp-amarillo.png";
    }else{
        boton.style.background = "#FFD400";
        icono.src = "imagenes/wpp-negro.png";
    }
}

window.addEventListener("scroll", actualizarBotonWhatsapp);
window.addEventListener("load", actualizarBotonWhatsapp);

function irContacto(){
    irInicio();

    setTimeout(() => {
        const seccion = document.getElementById("contacto");
        if(seccion){
            seccion.scrollIntoView({ behavior: "smooth" });
        }
    }, 200);
}

window.addEventListener("scroll", function(){

    const icono = document.getElementById("icono");
    const header = document.querySelector("header");

    if(!icono || !header) return;

    const headerBottom = header.getBoundingClientRect().bottom;

    // Si el header ya no está visible → fondo negro
    if(headerBottom <= 0){
        icono.classList.add("scrolled");
    }else{
        icono.classList.remove("scrolled");
    }
});

document.querySelectorAll(".close-menu").forEach(link => {

   link.addEventListener("click", () => {
    cerrarMenuCompleto();
});

});

function cerrarMenuCompleto(){

    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    // 🔒 CERRAR MENU
    if(menu){
        menu.classList.remove("abierto");
    }

    if(icono){
        icono.classList.remove("abierto");
    }

    // 🔒 CERRAR TODOS LOS SUBMENUS
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach(sub => {
        sub.classList.remove("submenu-activo");
    });
}

function seleccionarCategoria(categoria){

    mostrarProductos(categoria);

    // Cerrar submenu
    function seleccionarCategoria(categoria){
    mostrarProductos(categoria);
    cerrarMenuCompleto();
}

    // Cerrar menu
    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    if(menu) menu.classList.remove("abierto");
    if(icono) icono.classList.remove("abierto");
}

function cerrarModal(){

    const modal = document.getElementById("modal");
    const wpp = document.getElementById("wppBtn");

    if(modal){
        modal.style.display = "none";
    }

    if(wpp){
        wpp.style.display = "flex";
    }
}

function cambiarImagen(direccion){

    if(imagenesActuales.length <= 1) return;

    indiceModal += direccion;

    if(indiceModal < 0){
        indiceModal = imagenesActuales.length - 1;
    }

    if(indiceModal >= imagenesActuales.length){
        indiceModal = 0;
    }

    document.getElementById("modal-img").src = imagenesActuales[indiceModal];
}