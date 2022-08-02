
function alternar_fundo(){
    const body = document.body
    const Main = document.querySelector('#main')
    const btn = document.querySelector('.button')
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
    const desc = document.querySelector('.contentOne')
    const desc2 = document.querySelector('.contentTwo')
    const desc3 = document.querySelector('.contentThree')

    desc3.classList.toggle('textoDARK')
    desc2.classList.toggle('textoDARK')
    desc.classList.toggle('textoDARK')
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