// console
console.log("testing");

// interaction
const greenCircle = document.getElementById("green"); 
const plumCircle = document.getElementById("plum"); 
const blueCircle = document.getElementById("blue"); 

let interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
})



plumCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightblue";
})

// loop
const loopContainer = document.getElementById("loopContainer");
let message = "looping itself";

for (let i = 0; i < 10; i++) {
    console.log("loop");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

// condition
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function () {
    console.log("mouseover");
    square.style.backgroundColor = "lightgreen";
});

conditionContainer.addEventListener("mouseout", function () {
    square.style.backgroundColor = "lightsalmon";
});

// time
var interval = setInterval(update, 1000);
var i = 100;

function update() {
    document.getElementById("increaseText").style.fontSize = (i+=20) + "%";      
    if(i<=100) clearInterval(interval);
}

// display number of characters from the input

const inputLength = document.getElementById("submit");

let inputContainer = document.getElementById("inputText");
document.write(inputContainer.value);

inputLength.addEventListener("click", function() {
    return inputContainer.value;
} );


            