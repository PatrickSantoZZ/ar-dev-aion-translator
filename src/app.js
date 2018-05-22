import React, {Component} from 'react';

import _ from 'lodash';

import ButtonGroup from './components/asmo-eloys-button-group/button-group';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import {PAPER_STYLE, PAPER_STYLE_TITLE} from './constants/paper-style-sheet';
import {translateUserInput, myQueue} from './utility/utility-functions';

import './css/app.css';

class app extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false,
            isAsmoSelected: false,
            translatedText: ''
        };

        this.onTextFieldInputChange = this.onTextFieldInputChange.bind(this);
        this.toggle = this.toggle.bind(this);
    };

    componentDidMount() {
        this.throttledTranslation;
        this.inputValuesFromUser = '';
        this._queue = myQueue;
        let THROTTLE_INTERVAL = 1000; // <= adjust this number to see throttling in action

        // wrap it and supply interval representing minimum delay between invocations
        this.throttledTranslation = _.throttle(this.getTranslation, THROTTLE_INTERVAL);

    }

    componentWillUnmount() {
        this.throttledTranslation.cancel();
    }

//TODO: create is empty function using spread operators
    getTranslation() {
        let {isAsmoSelected, translatedText} = this.state;


        if (!_.isEmpty(this.inputValuesFromUser)) {
            try {
                this._queue.enqueue(this.inputValuesFromUser);

                // translatedText = translateUserInput(this.inputValuesFromUser);
                if (this._queue.getLength() > 0) {
                    let myTranslation = translateUserInput(this._queue.getFirstElement(), isAsmoSelected);

                    //setState translated Text
                    if (!_.isEmpty(myTranslation)) {
                        this.setState({translatedText: myTranslation});
                    }

                }
                console.log('translatedText', translatedText);
                console.log('length: ', this._queue.getLength());
                this._queue.toConsole();


                this._queue.dequeue();
            } catch (e) {
                //logging
                console.log('there is an error');
            }
        }

    }


    //When a user inputs text in the field, the getTranslation is throttled
    // by this.Translation method.. this will create better translation
    onTextFieldInputChange(e, values) {
        if (_.isEmpty(values)) {
            this.inputValuesFromUser = '';
        } else {
            this.inputValuesFromUser = values;
        }
        this.throttledTranslation();
    }

    toggle(selection) {
        console.log('selection: isAsmoSelected', selection);
        this.setState({isAsmoSelected: selection});
    }

    render() {
        const {translatedText} = this.state;
        return (
            <div className="app">
                <div className="app-header">
                    Aion Faction Translator
                </div>
                <div className="app-container">
                    <Paper style={PAPER_STYLE_TITLE} zDepth={4}>
                        <span>I am an:</span>
                        <ButtonGroup className={"app-button-group"}
                                     toggle={this.toggle}
                                     translatedTextToBeCopied={translatedText}
                        />
                    </Paper>
                    <Paper rounded={false} style={PAPER_STYLE} zDepth={3}>
                        <div className="field-style">
                            <TextField
                                id="inputField"
                                floatingLabelText="Enter Text"
                                fullWidth={true}
                                multiLine={true}
                                onChange={this.onTextFieldInputChange}>
                            </TextField>
                        </div>
                        <span className="disable-field-text">
                                Note: Pressing ctrl+a will select all and pressing ctrl+c will copy
                            </span>
                    </Paper>
                    <Paper rounded={false} style={PAPER_STYLE} zDepth={2}>
                        <div className="field-style">
                            <TextField
                                id="translatedField"
                                defaultValue={translatedText}
                                disabled={true}
                                fullWidth={true}
                                multiLine={true}
                            >
                                <span>{translatedText}</span>
                            </TextField>
                            <span className="disable-field-text">
                                Note: This field is disabled but you can still use the mouse
                                to highlight and copy text.
                            </span>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default app;
