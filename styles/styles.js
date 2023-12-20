window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const body = document.body;
  
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#fff'; /* Cambia el fondo del encabezado al hacer scroll */
      body.style.backgroundColor = '#fff'; /* Cambia el fondo del cuerpo al hacer scroll */
      body.style.color = '#4B4234'; /* Cambia el color del texto al hacer scroll */
    } else {
      header.style.backgroundColor = 'transparent'; /* Fondo transparente cuando se encuentra en la parte superior */
      body.style.backgroundColor = '#fff'; /* Fondo blanco cuando se encuentra en la parte superior */
      body.style.color = '#4B4234'; /* Color de texto cuando se encuentra en la parte superior */
    }
  });


