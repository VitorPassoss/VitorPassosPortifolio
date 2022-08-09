
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
    const proj4 = document.querySelector('.item-4')
    const tittle = document.querySelectorAll('.text-title')
    const textBody = document.querySelectorAll('.text-body')
    var descAll = document.querySelectorAll('.content')

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
    tittle[3].classList.toggle('textoDARK')

    textBody[0].classList.toggle('textoDARK')
    textBody[1].classList.toggle('textoDARK')
    textBody[2].classList.toggle('textoDARK')
    textBody[3].classList.toggle('textoDARK')

    proj1.classList.toggle('corprojblock')
    proj2.classList.toggle('corprojblock')
    proj3.classList.toggle('corprojblock')
    proj4.classList.toggle('corprojblock')


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

}


url = "https://api.github.com/users"




