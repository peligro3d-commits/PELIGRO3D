// ================= PRODUCTOS =================

const productos = [
{nombre:"Soporte Celular", imagen:"imagenes/producto1.png", descripcion:"Ideal para escritorio.", categoria:"hogar", precio:8500, codigo:"0001"},
{nombre:"Organizador Cocina", imagen:"imagenes/producto2.png", descripcion:"Orden para tu hogar.", categoria:"hogar", precio:12500, codigo:"0002"},
{nombre:"Lapicero 3D", imagen:"imagenes/producto3.png", descripcion:"Perfecto para estudiantes.", categoria:"estudiante", precio:6000, codigo:"0003"},
{nombre:"Regla Técnica", imagen:"imagenes/producto4.jpg", descripcion:"Accesorio útil.", categoria:"estudiante", precio:4500, codigo:"0004"},
{nombre:"Engranaje Repuesto", imagen:"imagenes/producto5.jpg", descripcion:"Repuesto técnico.", categoria:"repuestos", precio:15000, codigo:"0005"},
{nombre:"Piñón Técnico", imagen:"imagenes/producto6.jpg", descripcion:"Alta resistencia.", categoria:"repuestos", precio:22000, codigo:"0006"},
{nombre:"Figura Articulada", imagen:"imagenes/producto7.jpg", descripcion:"Juguete impreso en 3D.", categoria:"juguetes", precio:9000, codigo:"0007"},
{nombre:"Auto Miniatura", imagen:"imagenes/producto8.jpg", descripcion:"Modelo coleccionable.", categoria:"juguetes", precio:11000, codigo:"0008"}
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

    // Ocultamos carrusel y sección sobre si NO es inicio
    if(categoria !== "inicio"){
        if(carrusel) carrusel.style.display = "none";
        if(sobre) sobre.style.display = "none";
    }

    contenedor.innerHTML = "";

    let filtrados = categoria === "inicio"
        ? productos
        : productos.filter(p => p.categoria === categoria);

    filtrados.forEach(producto => {

        const div = document.createElement("div");
        div.className = "producto";

       div.innerHTML = `
         <img src="${producto.imagen}">
         <h3>${producto.nombre}</h3>
         <p class="precio">$ ${producto.precio.toLocaleString()}</p>
      `;

        div.onclick = function(){
           abrirModal(producto.nombre, producto.imagen, producto.descripcion, producto.precio, producto.codigo);
      };
        contenedor.appendChild(div);
    });

    const menu = document.getElementById("menu");
const icono = document.getElementById("icono");

if(menu && icono){
    menu.classList.remove("abierto");
    icono.classList.remove("abierto");
}
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
    const header = document.querySelector("header");

    if(!menu || !icono || !header) return;

    const abierto = menu.classList.contains("abierto");

    if(abierto){
        // CERRAMOS MENÚ
        menu.classList.remove("abierto");
        icono.classList.remove("abierto");

        // 🔑 REEVALUAMOS FONDO REAL
        const headerBottom = header.getBoundingClientRect().bottom;

        if(headerBottom <= 0){
            icono.classList.add("scrolled");   // fondo negro → icono amarillo
        }else{
            icono.classList.remove("scrolled"); // fondo amarillo → icono negro
        }

    }else{
        // ABRIMOS MENÚ
        menu.classList.add("abierto");
        icono.classList.add("abierto");
        icono.classList.remove("scrolled"); // el menú manda
    }
}

// ================= CARRUSEL =================

let indice = 0;

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

    if(menu && icono){
        menu.addEventListener("mouseleave", function(){
        menu.classList.remove("abierto");
        icono.classList.remove("abierto");
    });
    }

    setInterval(() => {
        moverCarrusel(1);
    }, 4000);

});


// ================= MODAL =================

function abrirModal(nombre, imagen, descripcion, precio, codigo){

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const img = document.getElementById("modal-img");
    const precioTxt = document.getElementById("modal-precio");
    const desc = document.getElementById("modal-descripcion");
    const codigoTxt = document.getElementById("modal-codigo");
    const btn = document.querySelector(".btn-whatsapp");

    modal.style.display = "flex";

    titulo.innerText = nombre;
    img.src = imagen;
    precioTxt.innerText = `Precio: $ ${precio.toLocaleString()}`;
    desc.innerText = descripcion;
    codigoTxt.innerText = `Código: ${codigo}`;

    const telefono = "5493413563549";
    const mensaje = `Hola! Quiero consultar por el producto: ${nombre} - Precio: $${precio}`;
    btn.href = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}

function cerrarModal(){
    document.getElementById("wppBtn").style.display = "flex";
    const modal = document.getElementById("modal");
    if(modal) modal.style.display = "none";
}

function actualizarBotonWhatsapp(){

    const boton = document.getElementById("wppBtn");
    const icono = document.getElementById("wppIcon");
    const contacto = document.getElementById("contacto");

    if(!boton || !icono || !contacto) return;

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

        const menu = document.getElementById("menu");
        const icono = document.getElementById("icono");
        const header = document.querySelector("header");

        if(!menu || !icono || !header) return;

        menu.classList.remove("abierto");
        icono.classList.remove("abierto");

        // Recalcular color correcto del icono
        const headerBottom = header.getBoundingClientRect().bottom;

        if(headerBottom <= 0){
            icono.classList.add("scrolled");
        }else{
            icono.classList.remove("scrolled");
        }
    });

});

