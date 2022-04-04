const mathOperation = getOperation();
const numbers = getNumbers();
let array;
let arrayTransform;
let mathResult = calculateResult ();
showResult ();


///
function getOperation(){
    let operation = prompt('Hi! What math operation do you want to do? '); 
    while (varificOperation(operation)){
        let operation = prompt ('Please choose +, -, * or / !')
    }return operation;
 }
function varificOperation(value) {
 value !== "+" || value !== "-" || value !== '*' || value !== '/';
}
 
function getNumbers() {
    do {
    array = prompt('please enter the numbers with a comma')
    } while ( array === ''|| array === null);
} return array;

function calculateResult (result) {
    let result;
    switch (mathOperation) {
        case '+':
            let result = 0;
            for (let i = 0; i <array.length; i++) {
                result = result +  Number(array[i]);
                arrayTransform = array.join ('+');
            } return result;
        case '-':
            let result = 0;
            if (array [0]>1) {
                result = result + Number(array[0]);
            }
            for (let i = 1; i <array.length; i++) {
                result = result - Number(array[i]);
                arrayTransform = array.join ('-');
            } return result;
        case '*':
            let result = 1;
            for (let i = 0; i <array.length; i++) {
                result = result * Number(array[i]);
                arrayTransform = array.join ('*');
            } return result;    
        case '/':
            let result = math.pow (array[0],2);
            for (let i = 0; i <array.length; i++) {
                result = result / Number(array[i]);
                arrayTransform = array.join ('/');
            } return result; 
    }
}

function showResult () {
     alert ( 'Your result:' +arrayTransform +'=' +mathResult);
}