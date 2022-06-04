// menu show y hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

// menu show
// validate if constant exists
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show_menu')
   })
}
// menu hidden
// validate if constant exists
if(navClose){
   navClose.addEventListener('click',() => {
      navMenu.classList.remove('show-menu')
   })
}

// remove menu mobile


// accordion skills

// qualification tabs

// services modal