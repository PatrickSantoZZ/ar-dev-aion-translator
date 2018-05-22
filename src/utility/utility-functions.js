import _ from 'lodash';
import {ASMO_LETTER_KEY_MAP, ELYOS_LETTER_KEY_MAP} from '../constants/letter-key-map';

//TODO: create is empty function using spread operators
const translateUserInput = (input, isAsmoSelected = true) => {

    let translation = 'Waiting to Translate';
    if (!_.isEmpty(input)) {
        try {
            console.log(input, isAsmoSelected);
            translation = input;
        } catch (e) {
            //logging
            console.log('there is an error')
        }
    }

    return translation;
};


function Queue() {
    this.queue = [];

    this.enqueue = (x) => {
        this.queue.push(x)
    };

    this.dequeue = () => {
        this.queue.shift();
    };

    this.toConsole = () => {
        console.log('Queue: ', this.queue);
    };

    this.getLength = () => {
        if (this.queue) {
            return this.queue.length;
        }
    };

    this.getFirstElement = () => {
        if (this.queue) {
            return this.queue[0];
        }
    };
}

let myQueue = new Queue();

export {translateUserInput, myQueue};