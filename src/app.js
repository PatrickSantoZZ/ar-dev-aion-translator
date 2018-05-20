import React, {Component} from 'react';
import './css/app.css';
import ButtonGroup from './components/asmo-eloys-button-group/button-group';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {PAPER_STYLE, PAPER_STYLE_TITLE} from "./constants/paper-style-sheet";

class app extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAsmoSelected: false
        };
        this.toggle = this.toggle.bind(this);
        this.onCopyTextButtonPressed = this.onCopyTextButtonPressed.bind(this);
        this.onTextFieldInputChange = this.onTextFieldInputChange.bind(this);
    };

    componentDidMount() {
        this.translatedText = 'Text will be translated in real time';
    }

    onCopyTextButtonPressed() {

    }

    onTextFieldInputChange(e, values) {
        console.log(values)
    }

    toggle(selection) {
        this.setState({isAsmoSelected: selection});
    }

    render() {
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
                                     copyText={this.onCopyTextButtonPressed}
                        />
                    </Paper>
                    <Paper rounded={false} style={PAPER_STYLE} zDepth={3}>
                        <div className="field-style">
                            <TextField
                                id="input-field"
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
                                id="disabled-field"
                                defaultValue={this.translatedText}
                                disabled={true}
                                floatingLabelFixed={true}
                                floatingLabelText="Translated Text"
                                fullWidth={true}
                                multiLine={true}
                                onChange={this.onTextFieldInputChange}>
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
