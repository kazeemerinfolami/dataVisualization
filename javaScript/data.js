let toggleOn = document.getElementById("toggleOn"),
toggleOff = document.getElementById("toggleOff"),
gridContainer = document.getElementById("grid-container"),
main = document.getElementById("main"),
check = document.getElementById("check"),
submitOddEven = document.getElementById("submitOddEven")
oddEven = document.getElementById("oddEven"),
lessNumber = document.getElementById("lessNumber"),
ResultInWord=document.getElementById("ResultInWord")
inputOddEven = document.getElementById("inputOddEven"),
color1 = document.getElementById("color1"),
color2 = document.getElementById("color2"),
color3 = document.getElementById("color3"),
color4 = document.getElementById("color4"),
color5 = document.getElementById("color5"),
color6 = document.getElementById("color6"),
smallFont = document.getElementById("smallFont"),
mediumFont = document.getElementById("mediumFont"),
largeFont = document.getElementById("largeFont"),
resizeWord = document.getElementById("resizeWord"),
calculator = document.getElementById("calculator"),
inputNum = document.getElementById("inputNum"),
solution = document.getElementById("solution"),
month = document.getElementById("month"),
revenue = document.getElementById("revenue"),
target = document.getElementById("target"),
whatMonth=document.getElementById("whatMonth"),
ifTarget=document.getElementById("ifTarget"),
revenueCheck=document.getElementById("revenueCheck"),
footer = document.getElementById("footer");

//toggle Button
function on(){
    if(toggleOn !== true){
        main.style.visibility= "visible"
        main.style.backgroundColor= "white"
        gridContainer.style.backgroundColor="white"
        footer.style.color="white"
    }else{
        main.style.backgroundColor = "White"
    }
}
function off(){
    if(toggleOff !== true){
        main.style.visibility="hidden",
        gridContainer.style.backgroundColor="black",
        footer.style.color="grey"
    }else{
        main.style.backgroundColor = "white"
    }
}

//color change
function col1(){
    if(color1 !== true){
        main.style.backgroundColor = "white",
        main.style.color = "black"
    }else{
        alert("refresh Background Color")
    }
}
function col2(){
    if(color2 !== true){
        main.style.backgroundColor = "grey",
        main.style.color = "wheat"
    }else{
        alert("refresh Background Color")
    }
}
function col3(){
    if(color3 !== true){
        main.style.backgroundColor = "green",
        main.style.color = "white"
    }else{
        alert("refresh Background Color")
    }
}
function col4(){
    if(color4 !== true){
        main.style.backgroundColor = "blue",
        main.style.color = "gold"
    }else{
       alert("refresh Background Color")
    }
}
function col5(){
    if(color5 !== true){
        main.style.backgroundColor = "black",
        main.style.color = "white"
    }else{
       alert("refresh Background Color")
    }
}
function col6(){
    if(color6 !== true){
        main.style.backgroundColor = "gold",
        main.style.color = "black"
    }else{
       alert("refresh Background Color")
    }
}

//word Resize
function font1(){
    if(smallFont !== true){
        resizeWord.style.fontSize = "small",
        resizeWord.innerHTML="This is smaller text"
    }else{
        ""
    }
} 

function font2(){
    if(mediumFont !== true){
        resizeWord.style.fontSize = "large",
        resizeWord.innerHTML="This is normal text"
    }else{
       ""
    }
}
function font3(){
    if(largeFont !== true){
        resizeWord.style.fontSize = "x-large",
        resizeWord.innerHTML="This is larger text"
    }else{
        ""
    }
}

//check if odd/ even and < then 10000


function valueOddEven(e){
  let vod =  inputOddEven.value
  
  if (vod === ""){
    e.preventDefault();
      oddEven.innerHTML = "Empty input"
      lessNumber.innerHTML = "Empty input"
    inputOddEven.value = ""
    }else if (vod % 2 === 0) {
        e.preventDefault();
        oddEven.innerHTML ="Even number"
        inputOddEven.value = ""
        }else {
            e.preventDefault();
            oddEven.innerHTML = "Odd number"
            inputOddEven.value = ""
     }

    if(vod < 10000){
        e.preventDefault();
        lessNumber.innerHTML = "number is less than 10000"
        inputOddEven.value = ""
        }else if(vod == 10000){
        lessNumber.innerHTML = "number is equal to 10000"
        inputOddEven.value = ""
        }
        else{
            e.preventDefault();
            lessNumber.innerHTML = "number is greater than 10000"
            inputOddEven.value = ""
        }
 }

function checkTarget(e){
    e.preventDefault();
    let monthInput = month.value
    let revenueInput = revenue.value
    let targetInput = target.value

    if(revenueInput == "" ){
        ifTarget.innerHTML = "invalid input"
        month.value = ""
        revenue.value = ""
        target.value = ""
    }else if(targetInput == ""){
        ifTarget.innerHTML = "invalid input"
        month.value = ""
        revenue.value = ""
        target.value = ""
    }else if(targetInput == ""){
        ifTarget.innerHTML = "invalid input"
        month.value = ""
        revenue.value = ""
        target.value = ""
    }else if(revenueInput >= targetInput){
        e.preventDefault();
        // whatMonth.innerHTML = monthInput
        ifTarget.innerHTML = `The month of ${monthInput} reached its sales target`
        month.value = ""
        revenue.value = ""
        target.value = ""
    }else{
        e.preventDefault();
        ifTarget.innerHTML = `The month of ${monthInput} didnt reach its sales target`
        month.value = ""
        revenue.value = ""
        target.value = ""
    }
}


//calculator

function calculate(e){
    e.preventDefault()
   solution.innerHTML = eval(inputNum.value)
}

revenueCheck.addEventListener("submit", checkTarget)
calculator.addEventListener("submit", calculate)
submitOddEven.addEventListener("submit", valueOddEven)