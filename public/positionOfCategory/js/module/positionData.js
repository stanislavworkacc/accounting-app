import { reqToData } from './reqToData.js';

export const positionData = async () => {
    const data = await reqToData();
    const currentUrl = window.location.href
    const currentId = currentUrl.split('').slice(31, 67).join('');

    for(let i = 0; i < data.length; i++) {
        if(currentId === data[i].id) {
            console.log('FROM currentPositionOfCategory', data[i].price);
            return [data[i].price, data[i].position];
        }
    }
}
