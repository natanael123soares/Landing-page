
var width = screen.width;
var image1 =document.querySelector('.img')

if (width <= 768)
  image1.src = "../images/image-hero-mobile.png";

function toggleMenu(){
  var nav = document.querySelector('#nav')
  nav.classList.toggle('active')
}