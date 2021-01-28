import { menu } from './module/menu.js';
import { priceOfPositionInCat } from './module/priceOfPositionInCat.js';
import { dataFromLocal } from './module/dataFromLocal.js';
import { eventsPositionOfCat } from './module/eventsPositionOfCat.js';
import { donePositionForDay } from './module/donePositionForDay.js';
import { sendStatistic } from './module/statistic.js';

const sendInfoBtn = document.getElementById('sendInfo');
sendInfoBtn.addEventListener('click', sendStatistic);

const activationProgram = async () => {
    try {
        dataFromLocal();
        await priceOfPositionInCat();
        donePositionForDay();
        menu();
        console.log('menu')
        eventsPositionOfCat();
    } catch (e) {
        console.log('Ошибка', e);
    }
};

activationProgram();

