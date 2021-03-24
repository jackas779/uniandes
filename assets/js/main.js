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

const container_card= document.querySelector('#container_cards')
let container_1 =document.querySelector('#conta_1')
let container_2 =document.querySelector('#conta_2')
let container_3 =document.querySelector('#conta_3')

container_1.addEventListener('mouseenter',card_1)
container_1.addEventListener('mouseleave',invisible_card)
container_2.addEventListener('mouseenter',card_2)
container_2.addEventListener('mouseleave',invisible_card)
container_3.addEventListener('mouseenter',card_3)
container_3.addEventListener('mouseleave',invisible_card)

function card_1(){
  let conta_1= document.querySelector('#conta_1')
  let coco = conta_1.cloneNode(true)
  coco.setAttribute("id","conta_4")
  container_card.appendChild(coco)
}
function card_2(){
  let conta_1= document.querySelector('#conta_2')
  let coco = conta_1.cloneNode(true)
  coco.setAttribute("id","conta_4")
  container_card.appendChild(coco)
}
function card_3(){
  let conta_1= document.querySelector('#conta_3')
  let coco = conta_1.cloneNode(true)
  coco.setAttribute("id","conta_4")
  container_card.appendChild(coco)
}
function invisible_card() {
  let remove = document.querySelector('#conta_4')
  let el= container_card.removeChild(remove)
}
