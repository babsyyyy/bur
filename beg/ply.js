let one = document.querySelector(".one");
let menu = document.querySelector(".menu")
one.addEventListener ("click", function(){
    if(menu.style.display == "none"){
        menu.style.display = "block"
    }else{menu.style.display = "none"}
})
console.log("i am a boy")