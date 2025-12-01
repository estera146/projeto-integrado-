
let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }
})


var elementos = document.getElementsByClassName('preco');

var soma = 0;
for (let i = 0; i < elementos.length; i++) {
  soma += parseFloat(elementos[i].innerText);
}

document.getElementById("total").innerHTML = 
  "Total: R$ " + soma.toFixed(2);
  
  let trilho = document.getElementById('trilho')
  let body = document.querySelector('body')

  trilho.addEventListener('click', ()=>{
      trilho.classList.toggle('dark')
      body.classList.toggle('dark')
  })



