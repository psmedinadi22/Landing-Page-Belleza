window.addEventListener('scroll', function() {
    
    const navbar = document.querySelector('.navbarpaula');
    const logoImg = document.getElementById('logoImgpaula');
    const companyName = document.getElementById('companyNamepaula');
    const initLink = document.getElementById('initLink');
    const usLink = document.getElementById('usLink');
    const productLink = document.getElementById('productLink');
    const contactLink = document.getElementById('contactLink');
    
  
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logoImg.src = 'images/logoNegro.png'; // Cambia a la versión del logo negro
      companyName.style.color = '#4B4234'; // Cambia el color del nombre de la empresa
      initLink.style.color = '#4B4234';
      usLink.style.color = '#4B4234';
      productLink.style.color = '#4B4234';
      contactLink.style.color = '#4B4234';
      contactLink.style.borderColor = '#4B4234';
      
    } else {
      navbar.classList.remove('scrolled');
      logoImg.src = 'images/logoBlanco.png'; 
      companyName.style.color = '#ffffff'; 
      initLink.style.color = '#ffffff';
      usLink.style.color = '#ffffff';
      productLink.style.color = '#ffffff';;
      contactLink.style.color = '#ffffff';
      contactLink.style.borderColor = '#ffffff';
    }

    const header = document.querySelector('.navbarpaula');
    const body = document.body;
    const contactButton = document.querySelector('.mobile-menu-icon');
  
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#fff'; /* Cambia el fondo del encabezado al hacer scroll */
      body.style.backgroundColor = '#fff'; /* Cambia el fondo del cuerpo al hacer scroll */
      body.style.color = '#4B4234'; /* Cambia el color del texto al hacer scroll */
      contactButton.classList.add('scrolled'); /* Añade una clase para cambiar el color del ícono */
    } else {
      header.style.backgroundColor = 'transparent'; /* Fondo transparente cuando se encuentra en la parte superior */
      body.style.backgroundColor = '#fff'; /* Fondo blanco cuando se encuentra en la parte superior */
      body.style.color = '#4B4234'; /* Color de texto cuando se encuentra en la parte superior */
      contactButton.classList.remove('scrolled'); /* Remueve la clase para restaurar el color del ícono */
    }

  });


  document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    const menuItems = document.querySelector('.menupaula ul');
    this.classList.toggle('open');
    menuItems.classList.toggle('active');
  });
  ;
  

  

 

  

