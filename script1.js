
let menu = document.querySelector("#menu");
let right = document.querySelector(".right");
let input = document.getElementById("input");
let error = document.getElementById("error");
let stars = document.querySelectorAll("#star")


    menu.addEventListener("click",()=>{
    right.classList.toggle("active")
    menu.classList.toggle("fa-times");
    })

    function validate(){
   
       if(input.value==""){
        error.innerHTML="this field is required!!"
        return false;
       }else if(input.value.length<4){
        error.innerHTML="min 4 character required"
        return false;
       }else{
        alert(" Thank you!!  Your email has been submitted!!");
        return true;
       }
     }

  for(x=0; x<stars.length; x++){
 
      stars.forEach(str=>{
        str.addEventListener("click",()=>{
         str.style.color="gold";
        
        })
      })
      
       
  }



  // stars.forEach((str,index0)=>{
  //   str.addEventListener("click",()=>{
  //     stars.forEach((item,indx0)=>{
  //       index0 >= indx0? item.classList.add("change"):item.classList.remove("change");
       
       
  //     })
  //   })
  // })

