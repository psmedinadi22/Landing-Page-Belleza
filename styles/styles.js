let menuOpen = false;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbarpaula');
    const logoImg = document.getElementById('logoImgpaula');
    const companyName = document.getElementById('companyNamepaula');
    const initLink = document.getElementById('initLink');
    const usLink = document.getElementById('usLink');
    const productLink = document.getElementById('productLink');
    const contactLink = document.getElementById('contactLink');
    const mobileMenuIconBars = document.querySelectorAll('.mobile-menu-icon .bar'); // Selección de las tres barras
  
    if (!menuOpen && window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logoImg.src = 'images/logoNegro.png'; // Cambia a la versión del logo negro
      companyName.style.color = '#4B4234'; // Cambia el color del nombre de la empresa
      initLink.style.color = '#4B4234';
      usLink.style.color = '#4B4234';
      productLink.style.color = '#4B4234';
      contactLink.style.color = '#4B4234';
      contactLink.style.borderColor = '#4B4234';
      mobileMenuIconBars.forEach(bar => {
        bar.style.backgroundColor = '#4B4234'; // Cambia el color de fondo de cada barra del icono
      });
    } else {
      navbar.classList.remove('scrolled');
      logoImg.src = 'images/logoBlanco.png'; 
      companyName.style.color = '#ffffff'; 
      initLink.style.color = '#ffffff';
      usLink.style.color = '#ffffff';
      productLink.style.color = '#ffffff';
      contactLink.style.color = '#ffffff';
      contactLink.style.borderColor = '#ffffff';
      mobileMenuIconBars.forEach(bar => {
        bar.style.backgroundColor = '#ffffff'; // Restaura el color de fondo de cada barra del icono
      });
    }
  });
  
  document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    const menuItems = document.querySelector('.menupaula ul');
    this.classList.toggle('open');
    menuItems.classList.toggle('active');
    menuOpen = !menuOpen;
  });
  