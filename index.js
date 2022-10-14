

const menuItens = document.querySelectorAll('.list-nav a[href^="#"]');

menuItens.forEach(item => {
   item.addEventListener('click', scrollToId)
});

function scrollToId(event){
  event.preventDefault();
   
  const to = getScrollTopByHref(event.target) - 70
  
  scrollToPosition(to)
}

function getScrollTopByHref(element){
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
  smoothScrollTo(0, to , 750);
  gsap.from(".item-1", {
    opacity: 0,
    x: -10,
    delay: 0.5,
    duration: 0.8,
    
   
  });
  gsap.from(".item-2", {
    opacity: 0,
    y: +10,
    delay: 0.5,
    duration: 0.8,
    
   
  });
  gsap.from(".item-3", {
    opacity: 0,
    x: +10,
    delay: 0.5,
    duration: 0.8,
    
   
  });
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};



    

 



 function ativarNav(){
   var navit = document.querySelector('#nav-itens')  
   navit.classList.remove('list-nav')

   if(navit.classList == 'list-nav2'){
     navit.classList.remove('list-nav2')
     navit.classList.add('list-nav')
   }else{
    navit.classList.add('list-nav2');
    navit.classList.remove('list-nav')
   }
}

function VerificarTela(){
  
  if( screen.width < 550){
    alert(`(commit recem feito) Esse site não foi desenvolvido inicialmente para dispositivos mobile , 
    qualquer problema,bug,ou melhoria por favor entrar em contato 
    o tamanho da tela do seu dispositivo é : ${screen.width}px`)
}
}

gsap.from(".itemNav .itemlist" , {
  opacity: 0,
  y: -10,
  delay: 0.6,
  duration: 0.8,  
});

gsap.from(".desc-cube", {
  opacity: 0,
  delay: 0.7,
  duration: 1,
  stagger: 0.5,
});

gsap.from("#tituloapp", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});

gsap.from(".header-linkapp", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});




gsap.from(".card", {
  opacity: 0,
  delay: 0.6,
  duration: 0.5,
  stagger: 0.2,
});


gsap.from(".bi-list", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});

gsap.from(".card2", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});
gsap.from("#titulo2app", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});
gsap.from("#contatosapp", {
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 1,
});

gsap.from(".bg ", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 1,
 
});

gsap.from(".bg2 ", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 1,
 
 
});

gsap.from(".toggleWrapper", {
  opacity: 0,
  y: -10,
  delay: 0.7,
  duration: 0.7,
 
});

gsap.from(".item-1", {
  opacity: 0,
  x: -10,
  delay: 1.2,
  duration: 1.2,
  
 
});
gsap.from(".item-2", {
  opacity: 0,
  y: +10,
  delay: 1.2,
  duration: 1.2,
  
 
});
gsap.from(".item-3", {
  opacity: 0,
  x: +10,
  delay: 1.2,
  duration: 1.2,
  
 
});

