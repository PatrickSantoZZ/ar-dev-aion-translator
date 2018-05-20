import React, {Component} from 'react';
import './css/app.css';
import ButtonGroup from './components/asmo-eloys-button-group/button-group';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {PAPER_STYLE, PAPER_STYLE_TITLE} from "./constants/paper-style-sheet";
import {getTranslation} from './utility/utility-functions';

class app extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false,
            isAsmoSelected: false,
            translatedText: 'Text will be translated in real time'
        };
        this.toggle = this.toggle.bind(this);
        this.onTextFieldInputChange = this.onTextFieldInputChange.bind(this);
    };

    onTextFieldInputChange(e, values) {
        try {
            let translatedText = getTranslation(values, this.state.isAsmoSelected);

            this.setState({translatedText: translatedText});

        } catch (e) {
            this.setState({translatedText: 'Unable to translate text :( '});
        }
    }

    toggle(selection) {
        this.setState({isAsmoSelected: selection});
    }

    render() {
        const {translatedText} = this.state
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
