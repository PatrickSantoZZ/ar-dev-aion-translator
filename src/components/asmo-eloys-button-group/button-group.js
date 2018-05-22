import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {BUTTON_STYLE} from '../../constants/button-style-sheet'

class ButtonGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false,
            isAsmoButtonPressed: false,
            isElyosButtonPressed: false
        };

        this.onPressAsmoButton = this.onPressAsmoButton.bind(this);
        this.onPressElyosButton = this.onPressElyosButton.bind(this);
    }

    onPressAsmoButton() {
        this.props.toggle(true);
        this.setState({
            isAsmoButtonPressed: true,
            isElyosButtonPressed: false
        });
    }

    onPressElyosButton() {
        this.props.toggle(false);
        this.setState({
            isAsmoButtonPressed: false,
            isElyosButtonPressed: true
        });
    }

    render() {
        const {className, translatedTextToBeCopied} = this.props;
        const {isAsmoButtonPressed, isElyosButtonPressed} = this.state;

        return (
            <div className={className}>
                < RaisedButton
                    label="Asmo"
                    disabled={isAsmoButtonPressed}
                    onClick={() => {
                        this.onPressAsmoButton();
                    }}
                    style={{margin: 12, padding: 2}}/>
                < RaisedButton
                    label="Elyos"
                    disabled={isElyosButtonPressed}
                    onClick={() => {
                        this.onPressElyosButton();
                    }}
                    style={{margin: 12, padding: 2}}/>
                <CopyToClipboard text={translatedTextToBeCopied}
                                 onCopy={() => this.setState({copied: true})}>
                    < RaisedButton
                        backgroundColor="#C5E1A5"
                        label="Copy Text"
                        style={BUTTON_STYLE}/>
                </CopyToClipboard>
            </div>

        );
    }
}

ButtonGroup.propTypes = {
    className: PropTypes.string,
    translatedTextToBeCopied: PropTypes.string.isRequired,
    toggle: PropTypes.func
};

export default ButtonGroup;