let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let dob = document.querySelector('#dob1');
    let luckyNumber = document.querySelector('#luckyNumber1');

    dob = dob.value;
    luckyNumber = parseInt(luckyNumber.value);

    if (
        dob == undefined ||
        dob == '' ||
        luckyNumber == '' ||
        luckyNumber == '0'
    ) {
        document.querySelector('#output').innerHTML =
            'Please enter both fields!';
        return;
    }

    console.log(dob); //2021-12-10
    console.log(typeof dob); //string
    console.log(parseInt(dob)); //2021
    console.log(dob[0]); //2

    // console.log(luckyNumber.value);
    // console.log(typeof luckyNumber.value);

    let sum = 0;

    let numbersArray = dob.match(/\d/g);
    // console.log(numbersArray);

    for (let number of numbersArray) {
        sum += parseInt(number);
    }

    // console.log(sum);

    if (sum % luckyNumber == 0)
        document.querySelector('#output').innerHTML =
            'Your birthday is lucky! 🎉';
    else
        document.querySelector('#output').innerHTML =
            'Your birthday is not lucky! 😢';
});
