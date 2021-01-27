import { positionData } from './positionData.js';


export async function priceOfPositionInCat () {
    const priceOfPositionHTML = document.querySelectorAll('.price');
    const priceOfPositionData = await positionData();

    for(let i = 0; i < priceOfPositionHTML.length; i++) {
        priceOfPositionHTML[i].innerHTML = String(priceOfPositionData[0][i])
    }
};