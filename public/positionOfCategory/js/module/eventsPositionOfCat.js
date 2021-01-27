import { priceForDayCategory } from './priceForDayCategory.js';
import { dataFromLocal } from './dataFromLocal.js';
import { clearInputs } from './clearInputs.js';
import { donePositionForDay } from './donePositionForDay.js';

const element = document.querySelector('.table');
const resetBtn = document.getElementById('resetAll');

element.addEventListener('click', (event) => {
    const target = event.target;
    eventsPositionOfCat(target);
});

resetBtn.addEventListener('click', () => {
    localStorage.clear();
    clearInputs();
});

export function eventsPositionOfCat(td) {
    if(td === undefined) {
        return;
    };

    if(td.dataset.add === 'add') {
        let namePosition = td.parentNode.childNodes[1].innerHTML;
        let direction = td.dataset.add;
        let inputValue = td.parentNode.childNodes[5].children[0].value;
        let amountHTML = td.parentNode.children[2].childNodes[1]
        amountHTML.value = Number(amountHTML.value) + 1;
        localStorage.setItem(namePosition, amountHTML.value);

        priceForDayCategory(namePosition, direction, inputValue);
        dataFromLocal();
        donePositionForDay()
    }
    if(td.dataset.add === 'delete') {
        let namePosition = td.parentNode.childNodes[1].innerHTML;
        let direction = td.dataset.add;
        let inputValue = td.parentNode.childNodes[5].children[0].value;
        let amountHTML = td.parentNode.children[2].childNodes[1];
        amountHTML.value = amountHTML.value <= -1 ? 0 : Number(amountHTML.value) - 1;

        localStorage.setItem(namePosition, amountHTML.value);
        priceForDayCategory(namePosition, direction, inputValue);
        dataFromLocal();
        donePositionForDay();
    }
}
