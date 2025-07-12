let isAnswered=false
 let score = Number(localStorage.getItem("score")) || 0;
let seta=document.querySelector(".seta")
let lettera=document.querySelector(".lettera")

seta.addEventListener("click",function (){
     if (isAnswered) return;
isAnswered = true;
seta.style.backgroundColor="red"
         seta.style.borderColor="red"
         lettera.style.color="white"

if(seta.style.backgroundColor=="red"){
    setb.style.backgroundColor="green"
         setb.style.borderColor="green"
         letterb.style.color="white"

}

         score+=0   
         localStorage.setItem("score", score);
     

     

})

let setb=document.querySelector(".setb")
let letterb=document.querySelector(".letterb")

    setb.addEventListener("click",function (){
         if (isAnswered) return;
        isAnswered = true;
        setb.style.backgroundColor="green"
         setb.style.borderColor="green"
         letterb.style.color="white"
    
         score+=1  
         localStorage.setItem("score", score); 
     
        
    
         
    })

    let setc=document.querySelector(".setc")
let letterc=document.querySelector(".letterc")

setc.addEventListener("click",function (){
     if (isAnswered) return;
isAnswered = true;

setc.style.backgroundColor="red"
         setc.style.borderColor="red"
         letterc.style.color="white"

    if(setc.style.backgroundColor=="red")
    {
         setb.style.backgroundColor="green"
         setb.style.borderColor="green"
         letterb.style.color="white"
    }
    
         score+=0  
         localStorage.setItem("score", score);
     
    
    
    
    

    
})

let setd=document.querySelector(".setd")
let letterd=document.querySelector(".letterd")

setd.addEventListener("click",function (){
     if (isAnswered) return;
isAnswered = true;
setd.style.backgroundColor="red"
         setd.style.borderColor="red"
         letterd.style.color="white"

    if(setd.style.backgroundColor=="red"){
    setb.style.backgroundColor="green"
         setb.style.borderColor="green"
         letterb.style.color="white"

    }
    
         score+=0 
         localStorage.setItem("score", score);
    

    
})


let but=document.querySelector(".but")
but.addEventListener("click",function(){
  
   let finalScore = localStorage.getItem("score") || 0;
  let message = `Your Final Score is: ${finalScore}`;
    
    if (finalScore =="4") {
        message += " You're Great!";
    }

    alert(message);
  
  localStorage.removeItem("score");
  

   
})