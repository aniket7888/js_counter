console.log("hello")

let section =document.getElementById("section")

let count = 0

let val = document.createElement("h2")
let incBtn =document.createElement("button")
let decBtn =document.createElement("button")
let reset =document.createElement("button")

val.innerText = count
incBtn.innerText ="Increment"
decBtn.innerText ="Decrement"
reset.innerText = "Reset"

incBtn.onclick = function(){
    count = count+1
    val.innerText = count
}

decBtn.onclick = function(){
    count -=1
    val.innerText = count
}
 
reset.onclick = function(){
    count = 0
    val.innerText = count
}
section.append(val ,incBtn,decBtn,reset)
