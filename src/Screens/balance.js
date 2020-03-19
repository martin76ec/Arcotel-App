import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Theme Dependency
import { styles } from './theme';
//Business logic
import * as Telephony from '../Model/Telephony';

export default function Balance() {

    React.useEffect(() => {
        Telephony.startUSSDCall(Telephony.getUSSDServiceNumber(provider));
    });

    return (
        <View style={ styles.container }>
            <Text style={ styles.container_title }> Operadora: { provider } </Text>
        <Text style={ styles.container_pharagraph }> Realizando consulta... </Text>
        </View>
    )
}

const provider = Telephony.getCarrier();



