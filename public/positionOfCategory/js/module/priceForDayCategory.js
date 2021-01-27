import { reqToData } from './reqToData.js';

export const priceForDayCategory= (namePosition, direction) => {
    const currentUrl = window.location.href;
    const currentId = currentUrl.split('').slice(31, 67).join('');
    const dayPriceCategory = document.getElementById('priceOfPosition');

    reqToData()
        .then(data => {
            data.forEach(category => { 
                if(category.id === currentId && direction === 'add') {
                    const idx = category.position.indexOf(namePosition);
                    const pricePosition = category.price[idx]; //string
                    const currentValueHTML = dayPriceCategory.innerHTML;

                    dayPriceCategory.innerHTML =  Number(pricePosition) + Number(currentValueHTML)
                } else if(category.id === currentId && direction === 'delete') {
                    const idx = category.position.indexOf(namePosition);
                    const pricePosition = Number(category.price[idx]);
                    const currentValueHTML = dayPriceCategory.innerHTML;

                    const valueMinus = currentValueHTML - pricePosition;
                    dayPriceCategory.innerHTML -= valueMinus <= 0 ? 0 : pricePosition;
                }
            })
        })
    
}