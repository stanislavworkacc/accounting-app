export function clearInputs() {
    console.log('here')
    const counterValues = document.querySelectorAll('.counter__value');
    const doneCoffeeForDay = document.getElementById('doneCoffeeForToday');
    const priceOfPosition = document.getElementById('priceOfPosition');

    doneCoffeeForDay.innerHTML = '';
    priceOfPosition.innerHTML = '';

    for(let i = 0; i < counterValues.length; i++) {
        counterValues.value = 0;
    }
}