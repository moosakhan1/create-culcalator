function appendToDisplay(value) {
   var a = document.getElementById('display').value += value;
}
    var b = document.getElementById('display')
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var display = document.getElementById('display');
}



function add() {
    display.value = display.value.toString().slice(0,-1)
}



function calculateResult() {
    try{
        b.value = eval(display.value)
    }
    catch(error){
        b.value = "Error"
    }
}