import {reqToData} from './module/dataFromServer.js';
import {render} from './module/render.js'

function activationEdit() {
    reqToData().then(data => {
        render(data)
    })

};

activationEdit();