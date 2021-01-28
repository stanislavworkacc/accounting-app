import { positionData } from './positionData.js';


export const priceOfPositionInCat =  async () => {
    const priceOfPositionHTML = document.querySelectorAll('.price');
    const priceOfPositionData = await positionData();

    for(let i = 0; i < priceOfPositionHTML.length; i++) {
        priceOfPositionHTML[i].innerHTML = String(priceOfPositionData[0][i])
    }
};