const allPosition = document.getElementById('allPosition');
const elementBefore = document.getElementById('input-field');
//const allPosition = document.getElementById('allPosition');


export function render (data) {
    const currentUrl = window.location.href
    const currentId = currentUrl.split('').slice(31, 67).join('');
    console.log(currentId);
    console.log(data);
    
    for(let i = 0; i < data.length; i++) {
        if(currentId === data[i].id) {
            console.log('Element ID',data[i].id)
            addElementInHtml(data[i].position, data[i].price)
        }
    }
};

function addElementInHtml(position, price) {
    for(let i = 0; i <position.length; i++) {
        const template = `
        <input id="position" name="position" type="text" class="validate newInput" value="${position[i]}">
        <label for="position"></label>
        <input id="price" name="price" type="text" class="validate newInput" required min="1" value="${price[i]}">
        <span class="helper-text" data-error="Введите цену">Цена</span>
    `;
    let newDiv = document.createElement("div");
    newDiv.classList.add('input-field');
    newDiv.innerHTML = template;

    allPosition.insertBefore(newDiv, elementBefore);
    }
}