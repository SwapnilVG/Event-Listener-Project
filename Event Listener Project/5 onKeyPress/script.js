let display = document.getElementById("display")
let input = document.getElementById("input")


input.addEventListener("keypress",function(e){
    display.innerText = "You Have Pressed " + e.key
})