export function donePositionForDay() {
    const doneInput = document.getElementById('doneCoffeeForToday');
    const amountPosition = document.querySelectorAll('.counter__value');

    let amount = 0;
    for(let i = 0; i < amountPosition.length; i++) {
        amount += Number(amountPosition[i].value);
    }
    doneInput.innerHTML = amount
}