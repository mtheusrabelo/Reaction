import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonContainer from '../../containers/Button';

const App = () => (
    <View style={style.container}>
        <ButtonContainer />
    </View>
);

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
