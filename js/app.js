$(() => {

    let $input = $('.field')
    let arrComands = []
    let total = 0
    $input.on('change', () => {

    })

    $('.btn').on('click', function (e) {
        e.preventDefault()
        let symbol = $(this).text()
        arrComands.push(symbol)
        $input.val(arrComands.toString().split(',').join(''))
        console.log(arrComands.toString().split(',').join(''))


        // if (arrComands.toString().split(['+']).length > 2) {
        //     let firnsNumber = arrComands.toString().split(['+'])[0].split(',').join('')
        //     let secondNumber = arrComands.toString().split(['+'])[1].split(',').join('')

        //     total += Number(firnsNumber)
        //     total += Number(secondNumber)
        //     console.log(arrComands.toString().split(['+']))

        //     arrComands = []
        //     $input.val(total)
        // }
    })
});
