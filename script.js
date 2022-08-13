
 function Change(){
   var img = document.querySelector('.img')
   var wdth = window.innerWidth
   if (wdth <=  768 ){
      img.innerHTML = "./images/image-hero-mobile.png"
   }
 }