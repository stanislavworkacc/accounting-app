import {reqToData} from './module/dataFromServer.js';
import {render, addElementInHtml} from './module/render.js'

const activationEdit = () => {
    reqToData().then(data => {
        render(data)
    })
};

activationEdit();