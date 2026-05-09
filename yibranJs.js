// ── 1. HAMBURGUESA ──────────────────────────────────────────────────────────
// Abre/cierra el nav en móvil
const btnMenu = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-abierta");
});

// Cierra el menú al hacer click en cualquier link del nav
// Útil en móvil: sin esto el menú queda abierto después de navegar
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-abierta");
    });
});


// ── 2. HEADER SCROLL ────────────────────────────────────────────────────────
// El header se achica y gana sombra cuando el usuario scrollea
// Hace que el header se vea más limpio y no tape tanto contenido
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ── 3. DARK MODE CON MEMORIA ─────────────────────────────────────────────────
// Guarda la preferencia en localStorage para que se recuerde al recargar
const btnDark = document.querySelector("#btn-dark");

if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
    btnDark.textContent = "☀️";
}

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const esDark = document.body.classList.contains("dark");
    localStorage.setItem("dark", esDark);
    btnDark.textContent = esDark ? "☀️" : "🌙";
});


// ── 4. FORMULARIO CON MENSAJE VISUAL ────────────────────────────────────────
// En lugar de console.log, muestra un mensaje real en la página
const formulario = document.querySelector(".contacto-form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#c-nombre").value.trim();

    if (nombre === "") {
        mostrarMensaje("Por favor completa tu nombre.", "error");
        return;
    }

    mostrarMensaje(`¡Gracias ${nombre}! Te contactamos pronto.`, "exito");
    formulario.reset();
});

function mostrarMensaje(texto, tipo) {
    const msg = document.createElement("p");
    msg.textContent = texto;
    msg.className = `form-msg form-msg--${tipo}`;
    formulario.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
}


// ── 5. SCROLL ANIMATIONS ────────────────────────────────────────────────────
// Las secciones aparecen con animación al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll("section").forEach((seccion) => {
    observer.observe(seccion);
});
