let cart = document.querySelector("#cart");
let value = document.querySelector("#value");
let icon = document.querySelector(".box");
let bag = document.querySelector("#icon");
let amount = document.querySelector("#amount");
let close = document.getElementById("close");
let check = document.querySelector(".check-cart");
let page1 = document.querySelector(".page1");
let para = document.querySelector("#para");
let image = document.querySelector("#image")
let dnk = document.querySelector("#dnk")
let cross = document.querySelector("#cross")
let text2 = document.querySelector("#text2");
let body = document.querySelector("body");
let sub = document.querySelector("#total")
let move = document.querySelector("#move");
let subtotal = document.querySelector(".subtotal")
let amt = document.getElementById("amnt");

let count =0;
let amount1 =0;


cart.addEventListener("click",()=>{
   count++;
   value.innerHTML=count;
   amount1 +=120*1;
   amount.innerHTML=`$ ${amount1}.00`;
   para.innerHTML=`${count} X $ ${amount1}.00`;
   dnk.style.display="block";
   image.style.display="block";
   cross.style.display="block";
   text2.style.display="none";
 sub.style.display="block"
subtotal.style.opacity="1"
  amt.innerHTML=`${amount1}.00`;
})

bag.addEventListener("click",()=>{
 check.classList.toggle("showw")
page1.classList.toggle("opacity")
cart.disabled=true
})

close.addEventListener("click",()=>{
   check.classList.remove("showw")
   page1.classList.remove("opacity")
   cart.disabled=false;
})

cross.addEventListener("click",()=>{
   cross.style.display="none";
   dnk.style.display="none"
   image.style.display="none"
   para.innerHTML=``;
   text2.style.display="block"
   amt.innerHTML=``;
   sub.style.display="none"
subtotal.style.opacity="0"
count=0;
amount.innerHTML=`$0.00`;
value.innerHTML="0";
})




