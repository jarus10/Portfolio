(function(){
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.querySelector('.main-nav');
  menuBtn && menuBtn.addEventListener('click', ()=>{
    if(mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); if(window.innerWidth < 900) mainNav.style.display = ''; }
    });
  });
})();