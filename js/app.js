//gerenate pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// calculator using event bubble
document.getElementById('calc-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const calcNumber = calcInput.value;
        const newNumber = calcNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin() {
    const pin = document.querySelector('#display-pin').value;
    const calcInput = document.querySelector('#calc-input').value;
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    if (pin == calcInput) {
        success.style.display = 'block';
        fail.style.display = 'none';
    } else {
        success.style.display = 'none';
        fail.style.display = 'block'
    }
}