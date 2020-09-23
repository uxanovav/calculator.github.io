let numbers = document.querySelectorAll('.button-number');
let operations = document.querySelectorAll('.button-option');
let eq = document.getElementById('equ');
let ac = document.getElementById('ac');
let c = document.getElementById('c');
let screen = document.querySelector('.screen-value');
let resultScreen = document.getElementById('result');
let result = '';
let current = '';
let a = '';
let b = '';
let action = '';

for ( let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    num.addEventListener('click', function (e) {
        numberPress(num.id);
        resultScreen.innerHTML = result;
    })
}

for ( let i = 0; i < operations.length; i++) {
    let ops = operations[i];
    ops.addEventListener('click', function (e){
        optionPress(ops.id);
        result += " "+ ops.innerHTML + " ";
        resultScreen.innerHTML = result;
    })
}

ac.addEventListener('click', function (e){
    current = '';
    screen.value = current;
    a = '';
    b = '';
    action = '';
    result = '';
    resultScreen.innerHTML = result;
});

c.addEventListener('click', function (e){
    current = current.substring(0, current.length - 1);
    screen.value = current;
    result = resultScreen.innerHTML.substring(0,resultScreen.innerHTML.length - 1);
    resultScreen.innerHTML = result;
});

eq.addEventListener('click', function (e) {
    a = onEqPress(a,current,action);
    resultScreen.innerHTML = result;
});

screen.addEventListener('oninput', function (e) {
    resultScreen.innerHTML = screen.value;
})


function numberPress (id) {
    switch(id){
        case 'one':
            current+='1';
            result+='1';
            break;
        case 'two':
            current+='2';
            result+='2';
            break;
        case 'three':
            current+='3';
            result+='3';
            break;
        case 'four':
            current+='4';
            result+='4';
            break;
        case 'five':
            current+='5';
            result+='5';
            break;
        case 'six':
            current+='6';
            result+='6';
            break;
        case 'seven':
            current+='7';
            result+='7';
            break;
        case 'eigth':
            current+='8';
            result+='8';
            break;
        case 'nine':
            current+='9';
            result+='9';
            break;
        case 'zzero':
            current+='0';
            result+='0';
            break;
        case 'dott':
            current+='.';
            result+='.';
            break;
    }
    screen.value = current;
}

function optionPress(id) {
        action = id;
        a = screen.value;
        current = '';
}

function onEqPress(a,total,action){
    b = total;
    if (action === 'plus'){
        total = Number(a) + Number(b);
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'minus'){
        total = Number(a) - Number(b);
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'multiply'){
        total = Number(a) * Number(b);
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'divide'){
        total = Number(a) / Number(b);
        a = total.toString();
        screen.value = total.toString();
    }
    result += ' = ' + a + ' ';
    console.log(a);
    return a;
}