import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {BUTTON_STYLE} from '../../constants/button-style-sheet'

class ButtonGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAsmoButtonPressed: false,
            isElyosButtonPressed: false
        };

        this.onPressAsmoButton = this.onPressAsmoButton.bind(this);
        this.onPressElyosButton = this.onPressElyosButton.bind(this);
    }

    onPressAsmoButton() {
        this.props.toggle(this.state.isAsmoButtonPressed);
        this.setState({
            isAsmoButtonPressed: true,
            isElyosButtonPressed: false
        });
    }

    onPressElyosButton() {
        this.props.toggle(!this.state.isAsmoButtonPressed);
        this.setState({
            isAsmoButtonPressed: false,
            isElyosButtonPressed: true
        });

    }

    render() {
        const {className, copyText} = this.props;
        const {isAsmoButtonPressed, isElyosButtonPressed} = this.state;

        return (
            <div className={className}>
                < RaisedButton
                    label="Asmo"
                    disabled={isAsmoButtonPressed}
                    onClick={() => {
                        this.onPressAsmoButton();
                    }}
                    style={{margin: 12}}/>
                < RaisedButton
                    label="Elyos"
                    disabled={isElyosButtonPressed}
                    onClick={() => {
                        this.onPressElyosButton();
                    }}
                    style={{margin: 12}}/>
                < RaisedButton
                    backgroundColor="#C5E1A5"
                    label="Copy Text"
                    onClick={() => {
                      copyText()
                    }}
                    style={BUTTON_STYLE}/>
            </div>

        );
    }
}

ButtonGroup.propTypes = {
    className: PropTypes.string,
    copyText: PropTypes.func.isRequired,
    toggle: PropTypes.func
};

export default ButtonGroup;