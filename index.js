
let btn=document.querySelector(".btn")

btn.addEventListener("click",function (event){
    event.preventDefault()

   let inputs=document.querySelector(".inputs").value
   let display=document.querySelector(".display")

   let b=document.createElement("p")

   b.innerHTML += ` <span class="dele">${inputs}</span> <i class="fa-solid fa-xmark"></i> <br>`
   display.append(b)

let delButton = b.querySelector(".fa-xmark")
    delButton.addEventListener("click", function () {
        b.remove(); 
    })

let dele=b.querySelector(".dele")
dele.addEventListener("click",function(){
    dele.innerHTML=`<del>${inputs}</del>`
})


})


/* <button class="delbtn">Delete</button> */