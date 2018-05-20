import _ from 'lodash';
import {ASMO_LETTER_KEY_MAP, ELYOS_LETTER_KEY_MAP} from '../constants/letter-key-map';

//TODO: create is empty function using spread operators
const getTranslation = (input, isAsmo = true, _currenTable = 0) => {

    let translation = 'Waiting to Translate';
    if (!_.isEmpty(input)) {
        try {
            console.log(input);
            translation = input;
        } catch (e) {
            //logging
            console.log('there is an error')
        }
    }

    return translation;
};

export {getTranslation};