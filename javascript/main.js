function updateLogo() {
    const logo = document.getElementById('logo');
    let path = '';

    // Detecta si la página actual está en la carpeta pages
    if (window.location.pathname.includes('pages')) {
        path = '../assets/imgs/';
    } else {
        path = 'assets/imgs/';
    }

    if (window.innerWidth >= 320 && window.innerWidth <= 581) {
        logo.src = path + 'logo-small.png';
    } else {
        logo.src = path + 'logo-siman.png';
    }
}

// Llama a la función cuando la página se carga y cuando se redimensiona la ventana
window.addEventListener('load', updateLogo);
window.addEventListener('resize', updateLogo);