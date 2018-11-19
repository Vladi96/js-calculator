$(() => {

    let $input = $('.field')
    let arrComands = []
    let total = 0
    $input.val(total)
    let numberStr = ''

    $('.btn').on('click', function (e) {
        e.preventDefault()

        let symbol = $(this).text()

        //Making array from numbers and operators //

        if ($(this).hasClass('btn-number')) {
            numberStr += '' + symbol
            $input.val(arrComands.toString().split(',').join('') + numberStr)
        }
        else {
            arrComands.push(Number(numberStr))
            numberStr = ''
        }

        if ($(this).hasClass('btn-comand')) {
            arrComands.push(symbol)
            $input.val(arrComands.toString().split(',').join(''))
        }
        else if ($(this).hasClass('btn-equal')) {
            calc(arrComands)
            console.log(arrComands)
        }
    })

    //That function should calculate result//

    function calc(numbers) {
        let index = numbers.indexOf('*')
        console.log(index)
    }
});
