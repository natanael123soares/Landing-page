
var width = screen.width;
var image1 =document.querySelector('.img')

if (width <= 768)
  image1.src = "../images/image-hero-mobile.png";

function toggleMenu(){
  var nav = document.querySelector('#nav')
  var black= document.querySelector('#black')
  nav.classList.toggle('active')
  black.classList.toggle('black1')
}
