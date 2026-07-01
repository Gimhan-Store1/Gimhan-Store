/*==========================
PRODUCT IMAGE SELECT
==========================*/

const images = document.querySelectorAll(".option-images img");

images.forEach((img)=>{

img.addEventListener("click",()=>{

images.forEach((item)=>{

item.style.border="2px solid #eee";

});

img.style.border="2px solid #ff6a00";

});

});


/*==========================
TOP MENU ACTIVE
==========================*/

const menu=document.querySelectorAll(".top-menu a");

menu.forEach((item)=>{

item.addEventListener("click",()=>{

menu.forEach((nav)=>{

nav.classList.remove("active");

});

item.classList.add("active");

});

});


/*==========================
BUY NOW
==========================*/

document.querySelector(".buy").addEventListener("click",()=>{

alert("Buy Now Clicked");

});


/*==========================
ADD TO CART
==========================*/

document.querySelector(".cart").addEventListener("click",()=>{

alert("Added To Cart");

});


/*==========================
FOLLOW BUTTON
==========================*/

const follow=document.querySelector(".store-top button");

follow.addEventListener("click",()=>{

if(follow.innerHTML=="Follow"){

follow.innerHTML="Following";

follow.style.background="#ff6a00";

follow.style.color="#fff";

}else{

follow.innerHTML="Follow";

follow.style.background="#fff";

follow.style.color="#ff6a00";

}

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
