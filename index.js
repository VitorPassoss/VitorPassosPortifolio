
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
    
    body.classList.toggle('fundoBRANCO')
    Main.classList.toggle('fundoBRANCO')
    n1.classList.toggle('textoDARK')
    n2.classList.toggle('textoDARK')
    n3.classList.toggle('textoDARK')
    n4.classList.toggle('textoDARK')
    txtBTN.classList.toggle('textoDARK')
    txtBTN2.classList.toggle('textoDARK')
   
 
   
}