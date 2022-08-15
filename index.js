VerificarTela()

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


function alternar_fundo(){
  
    const body = document.body
    const Main = document.querySelector('#main')
    const txtBTN = document.querySelector('.Link')
    const txtBTN2 = document.querySelector('.Link2')
    const n1 = document.querySelector('#Home')
    const n2 = document.querySelector('#About')
    const n3 = document.querySelector('#Projects')
    const n4 = document.querySelector('#Contats')
    const title1 = document.querySelector('#title1')
    const title2 = document.querySelector('#title2')
    const title3 = document.querySelector('#title3')
    const title4 = document.querySelector('#title4')
    const title5 = document.querySelector('#title5')
    const title6 = document.querySelector('#title6')
    const title7 = document.querySelector('#title7') 
    const proj1 = document.querySelector('.item-1')
    const proj2 = document.querySelector('.item-2')
    const proj3 = document.querySelector('.item-3')
    const tittle = document.querySelectorAll('.text-title')
    var descAll = document.querySelectorAll('.content')
    var textBody = document.querySelectorAll('.text-body') 
    const tituloapp = document.querySelector('#tituloapp')
    const titulo2app = document.querySelector('#titulo2app')
    const descCubeapp = document.querySelector('#contatosapp')
    descAll[0].classList.toggle('textoDARK')
    descAll[1].classList.toggle('textoDARK')
    descAll[2].classList.toggle('textoDARK')
    descAll[3].classList.toggle('textoDARK')
    descAll[4].classList.toggle('textoDARK')
    descAll[5].classList.toggle('textoDARK')
    descAll[6].classList.toggle('textoDARK')
    tittle[0].classList.toggle('textoDARK')
    tittle[1].classList.toggle('textoDARK')
    tittle[2].classList.toggle('textoDARK')
    proj1.classList.toggle('corprojblock')
    proj2.classList.toggle('corprojblock')
    proj3.classList.toggle('corprojblock')
    textBody[0].classList.toggle('textoDARK')
    textBody[1].classList.toggle('textoDARK')
    textBody[2].classList.toggle('textoDARK')
    title1.classList.toggle('textoDARK')
    title2.classList.toggle('textoDARK')
    title3.classList.toggle('textoDARK')
    title4.classList.toggle('textoDARK')
    title5.classList.toggle('textoDARK')
    title6.classList.toggle('textoDARK')
    title7.classList.toggle('textoDARK')
    body.classList.toggle('fundoBRANCO')
    Main.classList.toggle('fundoBRANCO')
    n1.classList.toggle('textoDARK')
    n2.classList.toggle('textoDARK')
    n3.classList.toggle('textoDARK')
    n4.classList.toggle('textoDARK')
    txtBTN.classList.toggle('textoDARK')
    txtBTN2.classList.toggle('textoDARK')
    tituloapp.classList.toggle('textoDARK')
    titulo2app.classList.toggle('textoDARK')
    descCubeapp.classList.toggle('textoDARK')

    
    }
  
    

 



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

