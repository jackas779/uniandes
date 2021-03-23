const srcs = ['assets/imagen/admin.jpg', 'assets/imagen/gatologin.jpeg', 'assets/imagen/BannerDestacado_Extension-2021.jpg']
const imagenen = document.querySelectorAll('.carousel-item')
const alts = ['gato1','gato2','gato3']
for(let i=0;i < 3;i++ ){
  let imgg = document.createElement('img')
  imgg.src= srcs[i];
  imgg.alt= alts[i]
  imagenen[i].appendChild(imgg)
}

let inpout = document.querySelector('.menu_busqueda__uniandes__search').childNodes[1]
inpout.addEventListener('click',finput)
function finput(){
  let a = prompt("cambia el contenido")
  inpout.setAttribute("placeholder",a)
  inpout.removeEventListener('click',finput)
}


let container_1 =document.querySelector('#conta_1')
let container_2 =document.querySelector('#conta_2')
let container_3 =document.querySelector('#conta_3')

container_1.addEventListener('click',invisible_card(3))
//container_1.removeEventListener('mouseout',invisble_card())

function invisible_card(bar){

  const container_card= document.querySelector('#container_cards')
  let conta_1= document.querySelector('#conta_1')
  let coco = conta_1.cloneNode(true)
  container_card.appendChild(coco)
}
