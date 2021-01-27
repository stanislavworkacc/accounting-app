 const sendInfoBtn = document.getElementById('sendInfo');

 sendInfoBtn.addEventListener('click', sendStatistic);

function sendStatistic() {
    const name = document.querySelectorAll('.namePosition');
    const price = document.querySelectorAll('.price');
    const amount = document.querySelectorAll('.counter__value');

    let data = []

    for(let i = 0; i < name.length; i++) {

        data.push(
            {
                name: name[i].innerHTML,
                amount: amount[i].value,
                price: price[i].innerHTML
            }
        )

        // let key = `positionAndAmount${i}`;
        // data[name[i].innerHTML] = [
        //     {
        //     amount: amount[i].value,
        //     price: price[i].innerHTML
        //     }
        // ]
    }
    console.log(data);
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:3200/statistic';
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

