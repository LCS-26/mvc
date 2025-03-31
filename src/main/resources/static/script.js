//Cargamos las secciones de la SPA
const home = document.getElementById('home_p');
const deportivos = document.getElementById('deportivos_p');
const suvs = document.getElementById('suvs_p');
const turismos = document.getElementById('turismos_p');
const contacto = document.getElementById('contacto_p');
const paginas = [home, deportivos, suvs, turismos, contacto];

//Mostramos la pagina de inicio
mostrarPagina(home);

//Mostramos la pagina de seleccionada
function mostrarPagina(pagina) {
    cargarPublicidad();
    paginas.forEach((p) => {
    p.style.display = 'none';
    });
    pagina.style.display = 'grid';
}

//Añadimos los eventos a los botones de la bara de navegación
document.getElementsByClassName('binicio')[0].addEventListener('click', () => {
  mostrarPagina(home);
});

document.getElementsByClassName('bdeportivos')[0].addEventListener('click', () => {
  mostrarPagina(deportivos);
});

document.getElementsByClassName('bsuvs')[0].addEventListener('click', () => {
    mostrarPagina(suvs);
});

document.getElementsByClassName('bturismos')[0].addEventListener('click', () => {
  mostrarPagina(turismos);
});

document.getElementsByClassName('bcontacto')[0].addEventListener('click', () => {
  mostrarPagina(contacto);
});

//Añadimos los eventos a los botones del pie de pagina
document.getElementsByClassName('binicio')[1].addEventListener('click', () => {
    mostrarPagina(home);
});
  
document.getElementsByClassName('bdeportivos')[1].addEventListener('click', () => {
    mostrarPagina(deportivos);
});
  
document.getElementsByClassName('bsuvs')[1].addEventListener('click', () => {
      mostrarPagina(suvs);
});
  
document.getElementsByClassName('bturismos')[1].addEventListener('click', () => {
    mostrarPagina(turismos);
});
  
document.getElementsByClassName('bcontacto')[1].addEventListener('click', () => {
    mostrarPagina(contacto);
});

//Función para cargar la publicidad
async function cargarPublicidad() {
    const contenedor = document.getElementById("publicidad");

    try {
        // Llamada a la API de productos
        const respuesta = await fetch("https://dummyjson.com/products/category/vehicle");
        const datos = await respuesta.json();

        if (!datos.products || datos.products.length === 0) {
            contenedor.innerHTML = "<p>No hay anuncios disponibles</p>";
            return;
        }

        // Seleccionar un producto aleatorio
        const producto = datos.products[Math.floor(Math.random() * datos.products.length)];

        // Crear la tarjeta del anuncio
        contenedor.innerHTML = `
            <div class="anuncio">
                <h3>${producto.title}</h3>
                <img src="${producto.thumbnail}" alt="${producto.title}">
                <p>${producto.description}</p>
                <p><strong>Precio: $${producto.price}</strong></p>
                <a href="${producto.link || '#'}" target="_blank">Ver más</a>
            </div>
        `;
    } catch (error) {
        console.error("Error cargando la publicidad:", error);
        contenedor.innerHTML = "<p>Error al cargar el anuncio</p>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const changePasswordForm = document.getElementById('change-password-form');
    const deleteAccountForm = document.getElementById('delete-account-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login realizado');
            window.location.href = '/foro';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registro exitoso');
            window.location.href = '/login';
        });
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Contraseña actualizada');
        });
    }

    if (deleteAccountForm) {
        deleteAccountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cuenta eliminada');
        });
    }
});