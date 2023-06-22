function executeFizzBuzz() {
    var numberInput = document.getElementById('number');
    var resultDiv = document.getElementById('result');
    var number = parseInt(numberInput.value);
    var result = fizzBuzz(number);
    resultDiv.innerText = result;
}

function fizzBuzz(number){
    if(typeof number !== 'number'){
        return number;
    }
    if (number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz';
        
    }
    if (number % 3 === 0){
        return 'Fizz';
    }
    if (number % 5 === 0){
        return 'Buzz';
    }
    return 'Não faço parte da brincadeira. '
}
