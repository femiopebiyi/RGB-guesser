var numSquares= 6;
let colors = generateRandomColor(numSquares)


let squares = document.querySelectorAll(".square")
let pickedColor =pickColor()
let colorDisplay = document.getElementById("colorDisplay")
let message = document.querySelector('#message')
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset")
let easy = document.getElementById("easyBtn")
let hard = document.getElementById("hardBtn")
let xtraHard = document.querySelector(".extrahard")


for(let i=6; i<squares.length; i++){
    squares[i].style.display = "none"
}
xtraHard.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    message.textContent = ""
    this.classList.add("selected")
    easy.classList.remove("selected")
    hard.classList.remove("selected")
    numSquares=9
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length;i++){
        squares[i].style.display = "block"
        squares[i].style.backgroundColor=colors[i]
    }
})

easy.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    this.classList.add("selected")
    hard.classList.remove("selected")
    xtraHard.classList.remove("selected")
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor=pickColor()
    colorDisplay.textContent =pickedColor
    for (let i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none"
        }
    }
})

hard.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    this.classList.add("selected");
    easy.classList.remove("selected");
    xtraHard.classList.remove("selected")
    numSquares = 6
    colors = generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor
    for (let i=0; i<squares.length;i++){
        
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block"
        
    }
    for(let i=6; i<squares.length; i++){
    squares[i].style.display = "none"
}
});

reset.addEventListener("click", function(){
    message.textContent= "";
    this.textContent = "New Colors"
    hard.classList.add("selected")
    xtraHard.classList.remove("selected")
    colors = generateRandomColor(6);
    for(let i=6; i<squares.length; i++){
    squares[i].style.display = "none"
}
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor
    for(let i =0; i<squares.length; i++){
    squares[i].style.backgroundColor =colors[i]
    }
    h1.style.backgroundColor = "steelblue"
})


colorDisplay.textContent=pickedColor

for(let i =0; i<squares.length; i++){
    squares[i].style.backgroundColor =colors[i]
    // add event listenersto square
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor
        if(clickedColor===pickedColor){
            reset.textContent = "Play Again?"
            message.textContent= "Correct!"
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor
        }
        else{
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again"
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


