let Decrement_button = document.getElementById("Decrement_button")
let Increment_button = document.getElementById("Increment_button")
let Reset_button = document.getElementById("Reset_button")
let DisplayValue = document.getElementById("DisplayValue")

Decrement_button.addEventListener("click",()=>{
    let value = Number(DisplayValue.innerText);
    if(value > 0){
        DisplayValue.innerText = value -1
    }
    else{
        alert("Nagative value not allowed")
    }
})

Increment_button.addEventListener("click",()=>{
    let value = Number(DisplayValue.innerText);
    if(value>=10){
        alert("10+  values are not allowed")
    }
    else{
        DisplayValue.innerText = value + 1
    }
})

Reset_button.addEventListener("click",()=>{
    DisplayValue.innerText= 0
})