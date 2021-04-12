const srcs = ['assets/imagen/admin.jpg', 'assets/imagen/gatologin.jpeg', 'assets/imagen/BannerDestacado_Extension-2021.jpg']
const imagenen = document.querySelectorAll('.carousel-item')
const alts = ['gato1','gato2','gato3']
for(let i=0;i < 3;i++ ){
  let imgg = document.createElement('img')
  imgg.src= srcs[i];
  imgg.alt= alts[i]
  imagenen[i].appendChild(imgg)
}

// let inpout = document.querySelector('.menu_busqueda__uniandes__search').childNodes[1]
// inpout.addEventListener('click',finput)
// function finput(){
//   let a = prompt("cambia el contenido")
//   console.log(a);
// }

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
 

if (screen.width >= 780){
  alert("La resolución de tu pantalla es de un mobil " )
}
else{
  console.log("es mas grande ")
} 
if (screen.width >= 970){
let menu_1 = document.querySelector('.menu_uniandes__links').childNodes[5]
let menu_2 = document.querySelector('.menu_uniandes__links').childNodes[9]
let menu_3 = document.querySelector('.menu_uniandes__links').childNodes[11]
menu_1.addEventListener('mouseenter',()=>{
  let container__1 = document.querySelector('.items_container_1')
  container__1.classList.add("pos")
  container__1.style.opacity = '1'
})
menu_1.addEventListener('mouseout',()=>{
  let container__1 = document.querySelector('.items_container_1')
  container__1.classList.remove("pos")
  container__1.style.opacity = '0'
})
menu_2.addEventListener('mouseenter',()=>{
  let container__2 = document.querySelector('.items_container_2')
  container__2.classList.add("pos")
  container__2.style.opacity = '1'
})
menu_2.addEventListener('mouseout',()=>{
  let container__2 = document.querySelector('.items_container_2')
  container__2.classList.remove("pos")
  container__2.style.opacity = '0'
})
menu_3.addEventListener('mouseenter',()=>{
  let container__3 = document.querySelector('.items_container_3')
  container__3.classList.add("pos")
  container__3.style.opacity = '1'
})
menu_3.addEventListener('mouseout',()=>{
  let container__3 = document.querySelector('.items_container_3')
  container__3.classList.remove("pos")
  container__3.style.opacity = '0'
})
}

if (screen.width <= 490){
let burger = document.querySelector('.menu_uniandes_burger__img__2')
burger.addEventListener('click',left)
var contad= 0

function left(){
  if(contad==0){
  let menu = document.querySelector('.header_uniandes')
  menu.classList.add("activo")
  menu.style.left='0'
  contad=1
  }else{
    let menu = document.querySelector('.header_uniandes')
    menu.style.removeProperty("left");
    let container__1 = document.querySelector('.items_container_1')
    container__1.style.removeProperty("left");
    let container__2 = document.querySelector('.items_container_2')
    container__2.style.removeProperty("left");
    let container__3 = document.querySelector('.items_container_3')
    container__3.style.removeProperty("left");
    contad=0
  }
}    

let menu_1 = document.querySelector('.menu_uniandes__links').childNodes[5]
let menu_2 = document.querySelector('.menu_uniandes__links').childNodes[9]
let menu_3 = document.querySelector('.menu_uniandes__links').childNodes[11]
let sub_menu_ce_01 = document.querySelector('#cerrar_sub_menu_01')
let sub_menu_ce_011 = document.querySelector('#cerrar_sub_menu_011')
let sub_menu_ce_0111 = document.querySelector('#cerrar_sub_menu_0111')
let sub_menu_ce_02 = document.querySelector('#cerrar_sub_menu_02')
let sub_menu_ce_022 = document.querySelector('#cerrar_sub_menu_022')
let sub_menu_ce_03 = document.querySelector('#cerrar_sub_menu_03')
let avance_sub_menu_01 = document.querySelector('#avance_sub_menu_01')
let avance_sub_menu_011 = document.querySelector('#avance_sub_menu_011')
let avance_sub_menu_02 = document.querySelector('#avance_sub_menu_02')

sub_menu_ce_01.addEventListener('click',()=>{
  let container__1 = document.querySelector('.items_container_1')
  container__1.style.removeProperty("left");
})

sub_menu_ce_011.addEventListener('click',()=>{
  let container__2 = document.querySelector('.items_container_2')
  container__2.style.removeProperty("left");
})

sub_menu_ce_0111.addEventListener('click',()=>{
  let container__2 = document.querySelector('.items_container_3')
  container__2.style.removeProperty("left");
})

sub_menu_ce_02.addEventListener('click',()=>{
  let content__2 = document.querySelector('.items_container_1').childNodes[3]
  let content__1 = document.querySelector('.items_container_1').childNodes[1]
  content__1.classList.remove("att")
  content__1.classList.add("atr")
  content__2.classList.remove("atr")
  content__2.classList.add("att")
})
sub_menu_ce_022.addEventListener('click',()=>{
  let content__2 = document.querySelector('.items_container_2').childNodes[3]
  let content__1 = document.querySelector('.items_container_2').childNodes[1]
  content__1.classList.remove("att")
  content__1.classList.add("atr")
  content__2.classList.remove("atr")
  content__2.classList.add("att")
})

sub_menu_ce_03.addEventListener('click',()=>{
  let content__3 = document.querySelector('.items_container_1').childNodes[5]
  let content__2 = document.querySelector('.items_container_1').childNodes[3]
  content__2.classList.remove("att")
  content__2.classList.add("atr")
  content__3.classList.remove("atr")
  content__3.classList.add("att")
})

avance_sub_menu_01.addEventListener('click',()=>{
  let content__2 = document.querySelector('.items_container_1').childNodes[3]
  let content__1 = document.querySelector('.items_container_1').childNodes[1]
  content__1.classList.remove("atr")
  content__1.classList.add("att")
  content__2.classList.remove("att")
  content__2.classList.add("atr")
})

avance_sub_menu_011.addEventListener('click',()=>{
  let content__2 = document.querySelector('.items_container_2').childNodes[3]
  let content__1 = document.querySelector('.items_container_2').childNodes[1]
  content__1.classList.remove("atr")
  content__1.classList.add("att")
  content__2.classList.remove("att")
  content__2.classList.add("atr")
})

avance_sub_menu_02.addEventListener('click',()=>{
  let content__2 = document.querySelector('.items_container_1').childNodes[3]
  let content__3 = document.querySelector('.items_container_1').childNodes[5]
  content__2.classList.remove("atr")
  content__2.classList.add("att")
  content__3.classList.remove("att")
  content__3.classList.add("atr")
})

menu_1.addEventListener('click',()=>{
  let conta_1= 0;
  if(conta_1==0){
    let container__1 = document.querySelector('.items_container_1')
  container__1.style.left='0'
  let content__1 = document.querySelector('.items_container_1').childNodes[1]
  content__1.classList.add("atr")
  }else{
    let content__1 = document.querySelector('.items_container_1').childNodes[1]
    content__1.classList.remove("atr")
    content__1.classList.add("att")
  }
  
})
menu_2.addEventListener('click',()=>{
  let conta_1= 0;
  if(conta_1==0){
    let container__2 = document.querySelector('.items_container_2')
  container__2.style.left='0'
  let content__1 = document.querySelector('.items_container_1').childNodes[1]
  content__1.classList.add("atr")
  }else{
    let content__1 = document.querySelector('.items_container_1').childNodes[1]
    content__1.classList.remove("atr")
    content__1.classList.add("att")
  }
  
})

menu_3.addEventListener('click',()=>{
  let conta_1= 0;
  if(conta_1==0){
    let container__2 = document.querySelector('.items_container_3')
  container__2.style.left='0'
  let content__1 = document.querySelector('.items_container_1').childNodes[1]
  content__1.classList.add("atr")
  }else{
    let content__1 = document.querySelector('.items_container_1').childNodes[1]
    content__1.classList.remove("atr")
    content__1.classList.add("att")
  }
  
})
}
