// ================= PRODUCTOS =================

const productos = [
//p1
{nombre:"Portalapices McDonal's", imagenes:["imagenes/p1.png"], descripcion:"Ideal para escritorio.", categoria:"estudiante", precio:5000, codigo:"0001", destacado:true},
//p2
{nombre:"Portalapices Campera", imagenes:["imagenes/p2.png", "imagenes/p2a.png"], descripcion:"Orden para tu hogar.", categoria:"estudiante", precio:13000, codigo:"0002", destacado:true},
//p3
{nombre:"Soporte para cables", imagenes:["imagenes/p3.png", "imagenes/p3a.png", "imagenes/p3b.png", "imagenes/p3c.png"], descripcion:"Perfecto para estudiantes.", categoria:"hogar", precio:3500, codigo:"0003", destacado:true},
//p4
{nombre:"Mano esqueletica", imagenes:["imagenes/p4.png", "imagenes/p4a.png"], descripcion:"Accesorio útil.", categoria:"hogar", precio:9000, codigo:"0004"},
//p5
//{nombre:"Organizador de escritorio", imagenes:["imagenes/p5.png"], descripcion:"Repuesto técnico.", categoria:"estudiante", precio:15000, codigo:"0005"},
//p6
{nombre:"Lapicero Malboro", imagenes:["imagenes/p6.png", "imagenes/p6a.png"], descripcion:"Alta resistencia.", categoria:"estudiante", precio:16000, codigo:"0006"},
//p7
{nombre:"Ganchos de corazón x10u", imagenes:["imagenes/p7.png", "imagenes/p7a.png", "imagenes/p7b.png"], descripcion:"Juguete impreso en 3D.", categoria:"estudiante", precio:4000, codigo:"0007"},
//p8
{nombre:"Cesto de basura Basketball", imagenes:["imagenes/p8.png", "imagenes/p8a.png", "imagenes/p8b.png"], descripcion:"Modelo coleccionable.", categoria:"hogar", precio:27000, codigo:"0008"},
//p9
{nombre:"Soporte de notas adhesivas", imagenes:["imagenes/p9.png", "imagenes/p9a.png", "imagenes/p9b.png"], descripcion:"Ideal para escritorio.", categoria:"estudiante", precio:8500, codigo:"0009"},
//p10
{nombre:"Maceta David", imagenes:["imagenes/p10.png", "imagenes/p10a.png"], descripcion:"Orden para tu hogar.", categoria:"jardin", precio:10000, codigo:"0010"},
//p11
{nombre:"Pala jardinería", imagenes:["imagenes/p11.png"], descripcion:"Perfecto para estudiantes.", categoria:"jardin", precio:10000, codigo:"0011"},
//p12
{nombre:"Maceta ornamental", imagenes:["imagenes/p12.png", "imagenes/p12a.png"], descripcion:"Accesorio útil.", categoria:"jardin", precio:13000, codigo:"0012"},
//13
{nombre:"Maceta bolson", imagenes:["imagenes/p13.png", "imagenes/p13a.png"], descripcion:"Repuesto técnico.", categoria:"jardin", precio:8000, codigo:"0013"},
//14
{nombre:"Stencil para café", imagenes:["imagenes/p14.png"], descripcion:"Alta resistencia.", categoria:"hogar", precio:18500, codigo:"0014"},
//15
{nombre:"Ganchos para plantas x5", imagenes:["imagenes/p15.png", "imagenes/p15a.png"], descripcion:"Juguete impreso en 3D.", categoria:"jardin", precio:9000, codigo:"0015"},
//16
{nombre:"Maceta Nike", imagenes:["imagenes/p16.png", "imagenes/p16a.png"], descripcion:"Modelo coleccionable.", categoria:"jardin", precio:15000, codigo:"0016"},
//p17
{nombre:"Ganchos de cocina x10", imagenes:["imagenes/p17.png", "imagenes/p17a.png"], descripcion:"Juguete impreso en 3D.", categoria:"hogar", precio:8000, codigo:"0017"},
//p18
{nombre:"Maceta griega", imagenes:["imagenes/p18.png", "imagenes/p18a.png"], descripcion:"Modelo coleccionable.", categoria:"jardin", precio:16000, codigo:"0018"},
//p19
{nombre:"LLavero Copa del mundo", imagenes:["imagenes/p19.png", "imagenes/p19a.png"], descripcion:"Orden para tu hogar.", categoria:"llavero", precio:0, codigo:"0019"},
//p20
{nombre:"LLavero pokebola", imagenes:["imagenes/p20.png", "imagenes/p20a.png"], descripcion:"Ideal para escritorio.", categoria:"llavero", precio:0, codigo:"0020"},
//p21
{nombre:"LLavero de pastillas", imagenes:["imagenes/p21.png", "imagenes/p21a.png"], descripcion:"Perfecto para estudiantes.", categoria:"llavero", precio:0, codigo:"0011"},
//p22
{nombre:"LLavero vaso GYM", imagenes:["imagenes/p22.png", "imagenes/p22a.png"], descripcion:"Accesorio útil.", categoria:"llavero", precio:0, codigo:"0022"},
//23
{nombre:"Llavero pesas", imagenes:["imagenes/p23.png"], descripcion:"Repuesto técnico.", categoria:"llavero", precio:0, codigo:"0023"},
//24
{nombre:"Llavero perro de globo", imagenes:["imagenes/p24.png", "imagenes/p24a.png"], descripcion:"Alta resistencia.", categoria:"llavero", precio:0, codigo:"0024"},
//25
{nombre:"Cuenco apilable", imagenes:["imagenes/p25.png", "imagenes/p25a.png"], descripcion:"Juguete impreso en 3D.", categoria:"hogar", precio:23000, codigo:"0025"},
//26
{nombre:"Llavero Monsters, INC", imagenes:["imagenes/p26.png", "imagenes/p26a.png"], descripcion:"Modelo coleccionable.", categoria:"llavero", precio:0, codigo:"0026"},
//p27
{nombre:"Soporte auriculares", imagenes:["imagenes/p27.png", "imagenes/p27a.png"], descripcion:"Juguete impreso en 3D.", categoria:"game", precio:18000, codigo:"0027"},
//p28
{nombre:"Soporte mando pulpo", imagenes:["imagenes/p28.png", "imagenes/p28a.png"], descripcion:"Modelo coleccionable.", categoria:"game", precio:8000, codigo:"0028"},
//p29
{nombre:"Soporte mando serpiente ", imagenes:["imagenes/p29.png", "imagenes/p29a.png"], descripcion:"Ideal para escritorio.", categoria:"game", precio:32000, codigo:"0029"},
//p30
{nombre:"Soporte auriculares griego", imagenes:["imagenes/p30.png", "imagenes/p30a.png"], descripcion:"Ideal para escritorio.", categoria:"game", precio:24000, codigo:"0030"},
//31
{nombre:"Soporte mando colchon", imagenes:["imagenes/p31.png", "imagenes/p31a.png"], descripcion:"Ideal para escritorio.", categoria:"game", precio:20000, codigo:"0031"},
//p32
//{nombre:"Portalapices Campera", imagenes:["imagenes/p2.png", "imagenes/p2a.png"], descripcion:"Orden para tu hogar.", categoria:"estudiante", precio:12500, codigo:"0002"},
//p33
//{nombre:"Soporte para cables", imagenes:["imagenes/p3.png", "imagenes/p3a.png"], descripcion:"Perfecto para estudiantes.", categoria:"hogar", precio:6000, codigo:"0003"},
//p34
//{nombre:"Mano esqueletica", imagenes:["imagenes/p4.png", "imagenes/p4a.png"], descripcion:"Accesorio útil.", categoria:"hogar", precio:4500, codigo:"0004"},
//p35
//{nombre:"Organizador de escritorio", imagenes:["imagenes/p5.png"], descripcion:"Repuesto técnico.", categoria:"estudiante", precio:15000, codigo:"0005"},
//p36
//{nombre:"Lapicero Malboro", imagenes:["imagenes/p6.png", "imagenes/p6a.png"], descripcion:"Alta resistencia.", categoria:"estudiante", precio:22000, codigo:"0006"},
//p37
//{nombre:"Ganchos de corazón", imagenes:["imagenes/p7.png", "imagenes/p7a.png", "imagenes/p7b.png"], descripcion:"Juguete impreso en 3D.", categoria:"estudiante", precio:9000, codigo:"0007"},
//p38
//{nombre:"Cesto de basura Basketball", imagenes:["imagenes/p8.png", "imagenes/p8a.png", "imagenes/p8b.png"], descripcion:"Modelo coleccionable.", categoria:"hogar", precio:11000, codigo:"0008"},
//p39
//{nombre:"Soporte de notas adhesivas", imagenes:["imagenes/p9.png", "imagenes/p9a.png", "imagenes/p9b.png"], descripcion:"Ideal para escritorio.", categoria:"estudiante", precio:8500, codigo:"0009"},































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

        div.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔑 CLAVE
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
    cerrarMenuCompleto();
}

document.addEventListener("click", (e) => {
    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    if(
        !menu.contains(e.target) &&
        !icono.contains(e.target)
    ){
        cerrarMenuCompleto();
    }
});

function toggleSubmenu(el){
    const submenu = el.parentElement;

    // cerrar otros submenus
    document.querySelectorAll(".submenu").forEach(s => {
        if(s !== submenu){
            s.classList.remove("submenu-activo");
        }
    });

    // toggle del actual
    submenu.classList.toggle("submenu-activo");
}

function cerrarModal(){
    const modal = document.getElementById("modal");
    const wppBtn = document.getElementById("wppBtn");

    if(modal){
        modal.style.display = "none";
    }

    if(wppBtn){
        wppBtn.style.display = "block";
    }
}
function cambiarImagen(direccion){

    const img = document.getElementById("modal-img");
    if(!img || imagenesActuales.length === 0) return;

    // fade out
    img.style.opacity = "0";

    setTimeout(() => {

        indiceModal += direccion;

        if(indiceModal < 0){
            indiceModal = imagenesActuales.length - 1;
        }

        if(indiceModal >= imagenesActuales.length){
            indiceModal = 0;
        }

        img.src = imagenesActuales[indiceModal];

        // fade in
        img.style.opacity = "0";
// cambia src
img.style.opacity = "1";
        

    }, 95);
}