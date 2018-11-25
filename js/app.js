$(() => {

    let input = $('#result');
    let arrComands = [];
    input.text(0);
    let numberStr = '';

    $(this).on('keyup', function (e) {
        let key = e.key;

        if (key == Number(key) || key === '.') {
            if (key === '.') {
                if ((!numberStr.includes('.')) && numberStr.length > 0) {
                    numberStr += key;
                }
                else {
                    input.text(arrToString(arrComands) + numberStr);
                }
            } else {
                numberStr += key;
            }
        }
        else if (/[\+\-\*/]/.test(key)) {
            if (numberStr !== '') {
                arrComands.push(Number(numberStr), key);
                numberStr = '';
            }
            else if (numberStr === '' && key === '-' && arrComands.length === 0) {
                numberStr += key
            }
            else {
                arrComands.push(key);
            }
        }
        else {
            switch (key.toLowerCase()) {
                case 'c':
                    numberStr = '';
                    arrComands = [];
                    input.text(arrToString(arrComands));
                    break;
                case 'backspace':
                    if (numberStr === '') {
                        numberStr += arrComands.pop();
                    }
                    numberStr = numberStr.slice(0, -1);
                    break;
                case '=':
                    arrComands.push(Number(numberStr));
                    arrComands = calc(arrComands);
                    numberStr = ''
                    input.text(arrToString(arrComands));
                    break;
                case 'enter':
                    arrComands.push(Number(numberStr));
                    arrComands = calc(arrComands);
                    numberStr = '';
                    input.text(arrToString(arrComands));
                    break;
                default:
                    break;
            }
        }
        input.text(arrToString(arrComands) + numberStr || 0)
    })

    $('.btn').on('click', function (e) {
        e.preventDefault();
        let symbol = this.text
        console.log(symbol)
        if (symbol == Number(symbol) || symbol === '.') {
            if (symbol === '.') {
                if ((!numberStr.includes('.')) && numberStr.length > 0) {
                    numberStr += symbol;
                }
                else {
                    input.text(arrToString(arrComands) + numberStr);
                }
            } else {
                numberStr += symbol;
            }
        }
        else if (/[\+\-\*/]/.test(symbol)) {
            if (numberStr !== '') {
                arrComands.push(Number(numberStr), symbol);
                numberStr = '';
            }
            else if (numberStr === '' && symbol === '-' && arrComands.length === 0) {
                numberStr += symbol
            }
            else {
                arrComands.push(symbol);
            }
        }
        else {
            console.log(symbol)
            switch (symbol) {
                case 'C':
                    numberStr = '';
                    arrComands = [];
                    input.text(arrToString(arrComands));
                    break;
                case 'CE':
                    if (numberStr === '') {
                        numberStr += arrComands.pop();
                    }
                    numberStr = numberStr.slice(0, -1);
                    break;
                case '=':
                    arrComands.push(Number(numberStr));
                    arrComands = calc(arrComands);
                    numberStr = ''
                    input.text(arrToString(arrComands));
                    break;
                default:
                    break;
            }
        }
        input.text(arrToString(arrComands) + numberStr || 0)

    })
    function arrToString(array) {
        return array.toString().split(',').join('')
    }

    function calc(numbers) {
        let a, b;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === '*') {
                a = numbers.splice(i - 1, 1);
                b = numbers.splice(i, 1);
                numbers[i - 1] = a * b;
                i = i - 1;
            } if (numbers[i] === '/') {
                a = numbers.splice(i - 1, 1);
                b = numbers.splice(i, 1);
                numbers[i - 1] = a / b;
                i = i - 1;
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === '+') {
                a = numbers.splice(i - 1, 1);
                b = numbers.splice(i, 1);
                numbers[i - 1] = Number(a) + Number(b);
                i = i - 1;
            } if (numbers[i] === '-') {
                a = numbers.splice(i - 1, 1);
                b = numbers.splice(i, 1);
                numbers[i - 1] = Number(a) - Number(b);
                i = i - 1;
            }
        }
        return numbers;
    }
})