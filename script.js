/* ======================================
   GIMHAN STORE - JAVASCRIPT
====================================== */

// Search Placeholder Animation

const search = document.getElementById("search");

const words = [
"Search Toys...",
"Search Teddy Bears...",
"Search Gift Items...",
"Search Cars...",
"Search Dolls..."
];

let index = 0;

setInterval(() => {

search.placeholder = words[index];

index++;

if(index >= words.length){

index = 0;

}

},2000);


// Shopping Cart Counter

let cartCount = 0;

const cartNumber = document.getElementById("cart-count");

function addToCart(){

cartCount++;

cartNumber.innerHTML = cartCount;

cartNumber.style.transform="scale(1.4)";

setTimeout(()=>{

cartNumber.style.transform="scale(1)";

},300);

}


// Product Hover Animation

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});


// Loading Animation

window.onload=function(){

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},200);

};


// Button Ripple Effect

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("btn")){

let circle=document.createElement("span");

circle.classList.add("ripple");

e.target.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

}

});


// Welcome Message

console.log("Welcome To Gimhan Store");
