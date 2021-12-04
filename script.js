let menubar = document.querySelector('#menu-bars');
let mynav =document.querySelector('.navbar');
let mycart = document.querySelector('#cart');
let shoppingcart = document.querySelector('.shopping-cart');



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
    
}
mycart.onclick = () =>{
    shoppingcart.classList.toggle('active');
}
