let display = document.getElementById("display")

document.addEventListener("keydown",function(e){
    display.style.color="red"
    display.innerText=e.key + " is KeyDown"
})

document.addEventListener("keyup",function(e){
    display.style.color="green"
    display.innerText=e.key + " is KeyUp"
})