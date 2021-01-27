export function sumCategory() {
    const priceOfPositions = document.querySelectorAll('.price');
    const amountOfPositions = document.querySelectorAll('.amount');
    const sumOfPositionsTd = document.querySelectorAll('.sumOfPosition');
    const sumOfMoney = document.querySelector('.sumOfMoney');

    let sumPerDayCategory = 0;
    for(let i = 0; i < priceOfPositions.length; i++) {
        let sumOfPosition = 
            priceOfPositions[i].innerHTML * amountOfPositions[i].innerHTML;
        sumOfPositionsTd[i].innerHTML = sumOfPosition;
        sumPerDayCategory += sumOfPosition;
        
    };
    sumOfMoney.innerHTML = sumPerDayCategory;
};