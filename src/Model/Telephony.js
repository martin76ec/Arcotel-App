//Telephony dependencies
import * as Cellular from 'expo-cellular';
import { Linking, Platform } from 'react-native';

const serviceProviders = [
    {
        name: 'Movistar', 
        serviceProvider: 'Otecel',
        serviceNumber: '*100%23', // %23 is the code for # symbol
    },
    {
        name: 'tuenti',
        serviceProvider: 'Otecel',
        serviceNumber: '*777%23',
    }, 
    {
        name: 'Claro',
        serviceProvider: 'Conecel',
        serviceNumber: '*123%23',
    },
    {
        name: 'CNT',
        serviceProvider: 'CNT',
        serviceNumber: '*611%23',
    },
];


export function getCarrier(){
    return Cellular.carrier;
} 

export function getUSSDServiceNumber(carrier){
    for(var provider in serviceProviders){
        if( carrier.toLocaleLowerCase() == serviceProviders[provider].name.toLocaleLowerCase() ){ //ANCHOR Check if this still works with providername in lowercase
            return serviceProviders[provider].serviceNumber;
        }
    }
}

export async function startUSSDCall(serviceNumber){

    let phoneNumber = 'tel:';

    if (Platform.OS === 'android') {
        phoneNumber = 'tel:${' + serviceNumber + '}';
    } else {
        phoneNumber = 'telprompt:${' + serviceNumber + '}';
    }

    Linking.openURL(phoneNumber);
}