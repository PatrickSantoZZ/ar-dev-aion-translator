import _ from 'lodash';

//TODO: create is empty function using spread operators
const getTranslation = (input, isAsmo = true) => {
    let translation = 'Waiting to Translate';
    if (_.isEmpty(input)) {
        return 'Nothing to translate';
    }
    try {
        translation = input;
    } catch (e) {
        //logging
        console.log('there is an error')
    }


    return translation;
};

export {getTranslation};