// ================= JS =================
let categoriaActual = "inicio";
let productoAbierto = false;
const productos = [
//p1
{nombre:"Portalapices McDonal's", imagenes:["imagenes/p1.png"], descripcion:"Diseño icónico adaptado a tu escritorio. Funcional y con presencia.", categoria:"estudiante", precio:5000, codigo:"0001",tamano:"12cm x 8cm x 10cm", destacado:true},

//p2
{nombre:"Portalapices Campera", imagenes:["imagenes/p2.png", "imagenes/p2a.png"], descripcion:"Un diseño distinto que convierte el orden en parte de la decoración.", categoria:"estudiante", precio:13000, codigo:"0002",tamano:"15cm x 10cm x 12cm", destacado:true},

//p3
{nombre:"Soporte para cables", imagenes:["imagenes/p3.png", "imagenes/p3a.png", "imagenes/p3b.png", "imagenes/p3c.png"], descripcion:"Organiza y fija tus cables con una solución simple y eficiente.", categoria:"hogar", precio:3500, codigo:"0003",tamano:"20cm x 15cm x 5cm", destacado:true},

//p4
{nombre:"Mano esqueletica", imagenes:["imagenes/p4.png", "imagenes/p4a.png"], descripcion:"Pieza decorativa con carácter, ideal para destacar cualquier espacio.", categoria:"hogar", precio:9000, codigo:"0004", tamano:"12cm x 8cm x 10cm"},

//p6
{nombre:"Lapicero Malboro", imagenes:["imagenes/p6.png", "imagenes/p6a.png"], descripcion:"Estética fuerte y diseño compacto para un escritorio con actitud.", categoria:"estudiante", precio:16000, codigo:"0006", tamano:"10cm x 5cm x 5cm"},

//p7
{nombre:"Ganchos de corazón x10u", imagenes:["imagenes/p7.png", "imagenes/p7a.png", "imagenes/p7b.png"], descripcion:"Prácticos y resistentes, con un diseño que suma detalle al ambiente.", categoria:"estudiante", precio:4000, codigo:"0007", tamano:"15cm x 10cm x 2cm"},

//p8
{nombre:"Cesto de basura Basketball", imagenes:["imagenes/p8.png", "imagenes/p8a.png", "imagenes/p8b.png"], descripcion:"Funcionalidad con estilo deportivo para espacios dinámicos.", categoria:"hogar", precio:27000, codigo:"0008", tamano:"25cm x 20cm x 15cm"},

//p9
{nombre:"Soporte de notas adhesivas", imagenes:["imagenes/p9.png", "imagenes/p9a.png", "imagenes/p9b.png"], descripcion:"Mantén tus recordatorios visibles y organizados.", categoria:"estudiante", precio:8500, codigo:"0009", tamano:"12cm x 8cm x 10cm"},

//p10
{nombre:"Maceta David", imagenes:["imagenes/p10.png", "imagenes/p10a.png"], descripcion:"Clásico reinterpretado en impresión 3D para tus plantas.", categoria:"jardin", precio:10000, codigo:"0010", tamano:"15cm x 10cm x 12cm"},

//p11
{nombre:"Pala jardinería", imagenes:["imagenes/p11.png"], descripcion:"Ligera, resistente y lista para el trabajo diario.", categoria:"jardin", precio:10000, codigo:"0011", tamano:"20cm x 15cm x 5cm"},

//p12
{nombre:"Maceta ornamental", imagenes:["imagenes/p12.png", "imagenes/p12a.png"], descripcion:"Diseño decorativo que realza cualquier rincón verde.", categoria:"jardin", precio:13000, codigo:"0012", tamano:"18cm x 12cm x 8cm"},

//p13
{nombre:"Maceta bolson", imagenes:["imagenes/p13.png", "imagenes/p13a.png"], descripcion:"Amplia y firme, ideal para plantas con mayor crecimiento.", categoria:"jardin", precio:8000, codigo:"0013", tamano:"25cm x 20cm x 15cm"},

//p14
{nombre:"Stencil para café", imagenes:["imagenes/p14.png"], descripcion:"Añade un acabado profesional a cada taza.", categoria:"hogar", precio:18500, codigo:"0014", tamano:"12cm x 8cm x 10cm"},

//p15
{nombre:"Ganchos para plantas x5", imagenes:["imagenes/p15.png", "imagenes/p15a.png"], descripcion:"Soporte firme y discreto para ordenar tu jardín.", categoria:"jardin", precio:9000, codigo:"0015", tamano:"15cm x 10cm x 2cm"},

//p16
{nombre:"Maceta Nike", imagenes:["imagenes/p16.png", "imagenes/p16a.png"], descripcion:"Diseño moderno que combina naturaleza y estilo urbano.", categoria:"jardin", precio:15000, codigo:"0016", tamano:"18cm x 12cm x 8cm"},

//p17
{nombre:"Ganchos de cocina x10", imagenes:["imagenes/p17.png", "imagenes/p17a.png"], descripcion:"Solución práctica para mantener todo en su lugar.", categoria:"hogar", precio:8000, codigo:"0017", tamano:"15cm x 10cm x 2cm"},

//p18
{nombre:"Maceta griega", imagenes:["imagenes/p18.png", "imagenes/p18a.png"], descripcion:"Inspiración clásica con terminación moderna en 3D.", categoria:"jardin", precio:16000, codigo:"0018", tamano:"18cm x 12cm x 8cm"},

//p19
{nombre:"LLavero Copa del mundo", imagenes:["imagenes/p19.png", "imagenes/p19a.png"], descripcion:"Detalle compacto para llevar la pasión siempre contigo.", categoria:"llavero", precio:0, codigo:"0019", tamano:"5cm x 3cm x 3cm"},

//p20
{nombre:"LLavero pokebola", imagenes:["imagenes/p20.png", "imagenes/p20a.png"], descripcion:"Diseño reconocible al instante, ideal para fans.", categoria:"llavero", precio:0, codigo:"0020", tamano:"5cm x 3cm x 3cm"},

//p21
{nombre:"LLavero de pastillas", imagenes:["imagenes/p21.png", "imagenes/p21a.png"], descripcion:"Pequeño, funcional y pensado para el día a día.", categoria:"llavero", precio:0, codigo:"0021", tamano:"5cm x 3cm x 3cm"},

//p22
{nombre:"LLavero vaso GYM", imagenes:["imagenes/p22.png", "imagenes/p22a.png"], descripcion:"Accesorio ligero con identidad fitness.", categoria:"llavero", precio:0, codigo:"0022", tamano:"5cm x 3cm x 3cm"},

//p23
{nombre:"Llavero pesas", imagenes:["imagenes/p23.png"], descripcion:"Detalle minimalista para quienes viven el entrenamiento.", categoria:"llavero", precio:0, codigo:"0023", tamano:"12cm x 8cm x 10cm"},

//p24
{nombre:"Llavero perro de globo", imagenes:["imagenes/p24.png", "imagenes/p24a.png"], descripcion:"Diseño llamativo con acabado sólido y resistente.", categoria:"llavero", precio:0, codigo:"0024", tamano:"5cm x 3cm x 3cm"},

//p25
{nombre:"Cuenco apilable", imagenes:["imagenes/p25.png", "imagenes/p25a.png"], descripcion:"Optimiza espacio sin perder diseño.", categoria:"hogar", precio:23000, codigo:"0025", tamano:"15cm x 10cm x 2cm"},

//p26
{nombre:"Llavero Monsters, INC", imagenes:["imagenes/p26.png", "imagenes/p26a.png"], descripcion:"Un toque nostálgico en formato compacto.", categoria:"llavero", precio:0, codigo:"0026", tamano:"5cm x 3cm x 3cm"},

//p27
{nombre:"Soporte auriculares", imagenes:["imagenes/p27.png", "imagenes/p27a.png"], descripcion:"Mantén tu setup ordenado con soporte firme y estable.", categoria:"game", precio:18000, codigo:"0027", tamano:"20cm x 15cm x 5cm"},

//p28
{nombre:"Soporte mando pulpo", imagenes:["imagenes/p28.png", "imagenes/p28a.png"], descripcion:"Diseño creativo que sostiene y decora al mismo tiempo.", categoria:"game", precio:8000, codigo:"0028", tamano:"15cm x 10cm x 5cm"},

//p29
{nombre:"Soporte mando serpiente ", imagenes:["imagenes/p29.png", "imagenes/p29a.png"], descripcion:"Estructura robusta con presencia única en tu escritorio.", categoria:"game", precio:32000, codigo:"0029", tamano:"20cm x 15cm x 5cm"},

//p30
{nombre:"Soporte auriculares griego", imagenes:["imagenes/p30.png", "imagenes/p30a.png"], descripcion:"Inspiración clásica aplicada a un setup moderno.", categoria:"game", precio:24000, codigo:"0030", tamano:"20cm x 15cm x 5cm"},

//p31
{nombre:"Soporte mando colchon", imagenes:["imagenes/p31.png", "imagenes/p31a.png"], descripcion:"Base estable y cómoda para proteger tu control.", categoria:"game", precio:20000, codigo:"0031", tamano:"15cm x 10cm x 5cm"},

//p32
{nombre:"muñeco articulado", imagenes:["imagenes/p32.png", "imagenes/p32a.png"], descripcion:"Figura flexible ideal para colección o exhibición.", categoria:"juguete", precio:6500, codigo:"0032", tamano:"20cm x 15cm x 5cm"},

//p33
{nombre:"Avión F18", imagenes:["imagenes/p33.png", "imagenes/p33a.png"], descripcion:"Modelo detallado pensado para amantes de la aviación.", categoria:"juguete", precio:6000, codigo:"0033", tamano:"15cm x 10cm x 5cm"},

//p34
{nombre:"Nave Star Wars", imagenes:["imagenes/p34.png", "imagenes/p34a.png"], descripcion:"Diseño icónico reinterpretado en impresión 3D.", categoria:"juguete", precio:4500, codigo:"0034", tamano:"15cm x 10cm x 5cm"},

//p35
{nombre:"Organizador de escritorio", imagenes:["imagenes/p5.png"], descripcion:"Espacio optimizado para mantener todo en orden.", categoria:"estudiante", precio:15000, codigo:"0035", tamano:"20cm x 15cm x 10cm"},

//p36
{nombre:"Lapicero Malboro", imagenes:["imagenes/p6.png", "imagenes/p6a.png"], descripcion:"Diseño imponente con mayor presencia y acabado sólido.", categoria:"estudiante", precio:22000, codigo:"0036", tamano:"10cm x 5cm x 5cm"},

//p37
{nombre:"Ganchos de corazón", imagenes:["imagenes/p7.png", "imagenes/p7a.png", "imagenes/p7b.png"], descripcion:"Prácticos y resistentes, con un detalle distintivo.", categoria:"estudiante", precio:9000, codigo:"0037", tamano:"15cm x 10cm x 5cm"},

//p38
{nombre:"Cesto de basura Basketball", imagenes:["imagenes/p8.png", "imagenes/p8a.png", "imagenes/p8b.png"], descripcion:"Versión más compacta sin perder estilo deportivo.", categoria:"hogar", precio:11000, codigo:"0038", tamano:"20cm x 15cm x 10cm"},

//p39
{nombre:"Soporte de notas adhesivas", imagenes:["imagenes/p9.png", "imagenes/p9a.png", "imagenes/p9b.png"], descripcion:"Organización simple con diseño funcional.", categoria:"estudiante", precio:8500, codigo:"0039", tamano:"15cm x 10cm x 5cm"},
];

// ================= MOSTRAR PRODUCTOS =================

function mostrarProductos(categoria, desdeHistorial = false){

    categoriaActual = categoria;
    const contenedor = document.getElementById("contenedor-productos");
    const carrusel = document.getElementById("carrusel-container");
    const sobre = document.querySelector(".sobre");
    const titulo = document.querySelector(".titulo-destacados");
    const contacto = document.getElementById("contacto");

    // Solo agregamos historial si NO viene del botón atrás
    if(!desdeHistorial){
        history.pushState({ categoria: categoria }, "");
    }

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

    intervalo = setInterval(cambiarImagen, 1500); //tiempo entre cambios de imagen producto)
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
    e.stopPropagation();
    abrirModal(
        producto.nombre,
        producto.imagenes,
        producto.descripcion,
        producto.precio,
        producto.codigo,
        producto.tamano   
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
    animarSobre();
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
        icono.classList.add("activo");
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

    const menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.add("fondo-amarillo");

    history.replaceState({ categoria: "inicio" }, "");
    categoriaActual = "inicio";

    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    // ===== CERRAR MENU AL SALIR CON EL CURSOR (SOLO DESKTOP) =====
    if(menu){
        menu.addEventListener("mouseleave", () => {

            if(window.innerWidth > 768){
                cerrarMenuCompleto();
            }

        });
    }

    setInterval(() => {
        moverCarrusel(1);
    }, 4000);

});

// ================= MODAL =================

function abrirModal(nombre, imagenes, descripcion, precio, codigo, tamano){

    if(productoAbierto){
        history.replaceState(
            { modal: true, categoria: categoriaActual },
            ""
        );
    } else {
        history.pushState(
            { modal: true, categoria: categoriaActual },
            ""
        );
        productoAbierto = true;
    }

    document.getElementById("wppBtn").style.display = "none";
    document.querySelector(".menu-icon").classList.add("menu-icon-disabled");

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const img = document.getElementById("modal-img");
    const precioTxt = document.getElementById("modal-precio");
    const desc = document.getElementById("modal-descripcion");
    const codigoTxt = document.getElementById("modal-codigo");
    const tamanoTxt = document.getElementById("modal-tamano");
    const btn = document.querySelector(".btn-whatsapp");

    modal.style.display = "flex";

    titulo.innerText = nombre;

    imagenesActuales = imagenes;
    indiceModal = 0;
    img.src = imagenesActuales[0];

    precioTxt.innerText = `Precio: $ ${precio.toLocaleString()}`;
    desc.innerText = descripcion;
    codigoTxt.innerText = `Código: ${codigo}`;

    if(tamano){
        tamanoTxt.innerText = `Tamaño: ${tamano}`;
    } else {
        tamanoTxt.innerText = "";
    }

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


document.querySelectorAll(".close-menu").forEach(link => {

   link.addEventListener("click", () => {
    cerrarMenuCompleto();
});

});

function cerrarMenuCompleto(){

    const menu = document.getElementById("menu");
    const icono = document.getElementById("icono");

    if(menu){
        menu.classList.remove("abierto");
    }

    if(icono){
        icono.classList.remove("activo");
    }

    // cerrar submenus
    document.querySelectorAll(".submenu").forEach(sub => {
        sub.classList.remove("submenu-activo");
    });

}

function seleccionarCategoria(categoria){
    mostrarProductos(categoria);
    cerrarMenuCompleto();
}


function cerrarModal(desdeHistorial = false){

    const modal = document.getElementById("modal");
    const wppBtn = document.getElementById("wppBtn");
    const menuIcon = document.querySelector(".menu-icon");

    if(modal){
        modal.style.display = "none";
    }

    if(wppBtn){
        wppBtn.style.display = "block";
    }

    if(menuIcon){
        menuIcon.classList.remove("menu-icon-disabled");
    }

    productoAbierto = false;

    // 🔥 CLAVE
    if(!desdeHistorial){
        history.back();
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
        img.style.opacity = "1";

    }, 95);
}


function toggleSubmenu(el){

    const submenu = el.parentElement;

    // si ya está abierto lo cerramos
    if(submenu.classList.contains("submenu-activo")){
        submenu.classList.remove("submenu-activo");
    }else{

        // cerrar otros submenus si existieran
        document.querySelectorAll(".submenu").forEach(sub => {
            sub.classList.remove("submenu-activo");
        });

        submenu.classList.add("submenu-activo");
    }

}

window.addEventListener("popstate", function(event){

    const modal = document.getElementById("modal");

    // 🔥 Si el modal está abierto → solo cerrarlo
    if(modal && modal.style.display === "flex"){
        cerrarModal(true);
        return;
    }

    // 🔥 Si NO hay modal abierto y hay categoría nueva
    if(event.state && event.state.categoria){

        // Solo cambiar categoría si es distinta
        if(event.state.categoria !== categoriaActual){
            mostrarProductos(event.state.categoria, true);
        }

        productoAbierto = false;
    }

});

window.addEventListener("scroll", function(){

    const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");

    // 🔥 SI EL MENU ESTA ABIERTO NO CAMBIAMOS NADA
    if(menu.classList.contains("abierto")) return;

    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;

    if(window.scrollY < headerHeight - 20){
        menuIcon.classList.add("fondo-amarillo");
        menuIcon.classList.remove("fondo-negro");
    }else{
        menuIcon.classList.add("fondo-negro");
        menuIcon.classList.remove("fondo-amarillo");
    }

});

function animarSobre(){
    const flecha = document.querySelector(".sobre-deco");
    const texto = document.querySelector(".sobre-texto");

    // Reset flecha
    flecha.classList.remove("animar");
    void flecha.offsetWidth;
    flecha.classList.add("animar");

    // Reset texto
    texto.classList.remove("animar-texto");
    void texto.offsetWidth;
    texto.classList.add("animar-texto");

    window.addEventListener("load", () => {
    animarHeader();
    animarSobre();
});
}

function animarHeader(){
    const header = document.querySelector("header");

    header.classList.remove("header-animar");
    void header.offsetWidth;
    header.classList.add("header-animar");
}
