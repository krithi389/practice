let fabars=document.querySelector(".fa-bars")

fabars.addEventListener("click",function(){

    let newmenubar=document.querySelector(".newmenubar")
   newmenubar.style.left="0"

   let faxmark=document.querySelector(".fa-xmark")
   
   faxmark.addEventListener("click",function(){
    newmenubar.style.left="-60%"
   })
  
})
 




