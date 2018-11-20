$(() => {

    let $input = $('.field')
    let arrComands = []
    let result = 0
    $input.val(result)
    let numberStr = ''

    $input.on('keyup', function (e) {
        e.preventDefault()

        let symbol = $input.val().slice(-1)
        if (Number.isInteger(symbol) && /[\+\-\*/\.]/.test(arrComands.slice(-1)[0])) {
            arrComands.pop()
            arrComands.push(symbol)
            $input.val(arrComands.toString().split(',').join(''))
        } else {
            if (/\d/.test(symbol) || /[\+\-\*/\.]/.test(symbol)) {
                arrComands.push(symbol)
                $input.val(arrComands.toString().split(',').join(''))

            } else {
                $input.val(arrComands.toString().split(',').join(''))
            }
        }
    })

    // function calc(numbers) {
    //     let index = numbers.indexOf('*')
    //     let a, b

    //     while (index != -1) {
    //         a = numbers.splice(index - 1, 1)
    //         b = numbers.splice(index, 1)
    //         numbers[index - 1] = a * b
    //         index = numbers.indexOf('*')
    //     }

    //     index = numbers.indexOf('/')
    //     while (index != -1) {
    //         a = numbers.splice(index - 1, 1)
    //         b = numbers.splice(index, 1)
    //         numbers[index - 1] = a / b
    //         index = numbers.indexOf('/')
    //     }

    //     index = numbers.indexOf('+')
    //     while (index != -1) {
    //         a = Number(numbers.splice(index - 1, 1))
    //         b = Number(numbers.splice(index, 1))
    //         numbers[index - 1] = a + b
    //         index = numbers.indexOf('+')
    //     }

    //     index = numbers.indexOf('-')
    //     while (index != -1) {
    //         a = numbers.splice(index - 1, 1)
    //         b = numbers.splice(index, 1)
    //         numbers[index - 1] = a - b
    //         index = numbers.indexOf('-')
    //     }
    //     return numbers
    // }
})

        // if ($(this).hasClass('btn-number')) {
        //     numberStr += '' + symbol
        //     $input.val(arrComands.toString().split(',').join('') + numberStr)
        // }
        // else {
        //     if (result === 0) {
        //         arrComands.push(Number(numberStr))
        //         numberStr = ''
        //     }
        //     else {
        //         console.log(arrComands)
        //     }
        // }

        // if ($(this).hasClass('btn-comand')) {
        //     arrComands.push(symbol)
        //     $input.val(arrComands.toString().split(',').join(''))
        // }
        // else if ($(this).hasClass('btn-equal')) {
        //     result = calc(arrComands)
        //     $input.val(result)
        //     arrComands = []
        //     arrComands.push(result[0])
        // }