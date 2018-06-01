import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.t('button:buttonWasClicked', props)}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default translate()(Button);
