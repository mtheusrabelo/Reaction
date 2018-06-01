import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as clickActions from '../../../app/actions/clickAction';
import Button from '../../components/Button';

const ButtonContainer = (props) => (
    <Button clicks={props.clicks} onPress={props.actions.addClick} />
);

ButtonContainer.propTypes = {
    clicks: PropTypes.func.isRequired,
    actions: PropTypes.shape({
        addClick: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = (state) =>
    ({ clicks: state.clicks });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(clickActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
