export function dataFromLocal() {
    const namePosition = document.querySelectorAll('.namePosition');
    const amountPosition = document.querySelectorAll('.counter__value');

    for(let i = 0; i < namePosition.length; i++) {
        const element = namePosition[i].textContent;
        const elemValue = localStorage.getItem(element);
        amountPosition[i].value = elemValue === null ? 0 : elemValue;
    };
};