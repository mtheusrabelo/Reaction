import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { translate } from 'react-i18next';

const MyButton = (props) => (
    <View>
        <Button
            onPress={props.onPress}
            color="red"
            title={props.t('button:buttonWasClicked', props)}
        />
    </View>
);

MyButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default translate()(MyButton);
