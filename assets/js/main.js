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

let cats = document.querySelector('.container__card__img').childNodes[1]
let cat = document.querySelector('.container__card__content__parra').childNodes[1]
let cat_1 = cats
console.log(cat);
const card = document.createElement('div')
card.className= "container__card"

const con_img = document.createElement('div')
//con_img.textContent = "este es un div dentro de un div"
con_img.className= "container__card__img"
con_img.appendChild(cat_1)


const text_card = document.createElement('div')
text_card.textContent= "este div es el div del mcontenido"
text_card.className= "container__card__content__parra"
text_card.appendChild(cat)



card.appendChild(con_img)
card.appendChild(text_card)
container_card.appendChild(card)