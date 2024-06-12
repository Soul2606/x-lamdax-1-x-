
const button_element = document.getElementById("button")
const paragraph_element = document.getElementById("display")
const growth_slider = document.getElementById("growth")
const growth_label = document.getElementById("range-label")

let x = 0




growth_slider.addEventListener("input", function(){
    growth_label.textContent = growth_slider.value / 100
})




button_element.addEventListener("click", function(){

    const start_value = document.getElementById("start").value
    const growth = growth_slider.value / 100

    if(x === 0){
        x = start_value
    }

    x = growth * x * (1-x)
    paragraph_element.textContent = x
})