const inputEl = document.getElementById("inp")
const button = document.getElementById("btn")


button.addEventListener("click" , function(){
    let inp = parseFloat( inputEl.value)
    renderLen(inp)
    rendervol(inp)
    rendermass(inp)
})


function renderLen(num) { 
    let feet = (num * 3.281).toFixed(3)
    let meter = (num / 3.281).toFixed(3)
    document.getElementById("converted1").innerHTML = `
    ${num} meters = ${feet} feet | ${num} feet = ${meter} meter
    `
 }

 function rendervol(num) { 
    let liter = (num * 0.264).toFixed(3)
    let gallon = (num / 0.264).toFixed(3)
    document.getElementById("converted2").innerHTML = `
    ${num} liter = ${liter} gallon | ${num} gallon = ${gallon}  
    `
 }

 function rendermass(num) { 
    let kilogram = (num * 2.204).toFixed(3)
    let pound = (num / 2.204).toFixed(3)
    document.getElementById("converted3").innerHTML = `
    ${num} kilogram = ${kilogram} pound | ${num} pound = ${pound} kilogram
    `
 }