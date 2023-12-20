window.addEventListener('scroll', function() {
    
    const navbar = document.querySelector('.navbar');
    const logoImg = document.getElementById('logoImg');
    const companyName = document.getElementById('companyName');
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
  });




 

  

