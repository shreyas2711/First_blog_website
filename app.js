 const mobileMenu =document.querySelector('.mobile-menu')
 const scrollBtn = document.querySelector('.scroll-top')
 mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')

 }) 

//  First function

window.addEventListener('scroll',function(){
   if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
      scrollBtn.style.display = "block"
   }
   else{
      scrollBtn.style.display = "none"
   }
})

// Second function

scrollBtn.addEventListener('click',()=>{
   document.documentElement.scrollTop = 0;
})

