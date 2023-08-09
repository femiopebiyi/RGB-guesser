let colors = generateRandomColor(6)


let squares = document.querySelectorAll(".square")
let pickedColor =pickColor()
let colorDisplay = document.getElementById("colorDisplay")
let message = document.querySelector('#message')
let h1 = document.querySelector("h1");


colorDisplay.textContent=pickedColor

for(let i =0; i<squares.length; i++){
    squares[i].style.backgroundColor =colors[i]
    // add event listenersto square
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor
        if(clickedColor===pickedColor){
            message.textContent= "Correct!"
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor
        }
        else{
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again!!"
        }
    })
}

function changeColor(color){
    for (let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor=color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
    
}
function generateRandomColor(num){
    var arr = []
    for (let i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr
    
}

function randomColor (){
    let r =Math.floor(Math.random()* 256)
    let g =Math.floor(Math.random()* 256)
    let b =Math.floor(Math.random()* 256)
    return "rgb("+ r +", " + g + ", "+ b +")"
}


