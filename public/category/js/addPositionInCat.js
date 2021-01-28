// const addPositionInCat = () => {
    const addPositionBtn = document.getElementById('addPosition');
    const elementBefore = document.getElementById('input-field');
    const allPosition = document.getElementById('allPosition');

    
    const template = `
        
        <input placeholder="Название новой позиции" id="position" name="position" type="text" class="validate newInput">

        <input placeholder="Введите цену" id="price" name="price" type="text" class="validate newInput" required min="1">
        <span class="helper-text" data-error="Введите цену">Введите цену</span>
    `;
    addPositionBtn.addEventListener('click', (event) => {
        

        event.preventDefault();
        let newDiv = document.createElement("div");
        newDiv.classList.add('input-field');
        newDiv.innerHTML = template;
        allPosition.insertBefore(newDiv, elementBefore);
    });
// };
