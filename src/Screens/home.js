import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
// Theme Dependency
import { styles2, styles } from './theme';
import { Foundation } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const goToBalance = () => {
        navigation.navigate('Balance');
    }

    const goToHomologation = () => {
        navigation.navigate('Homologation');
    }

    return (
        <View style={ styles2.homecontainer }>
            <View style={ styles2.homecontainer_body }>
                <View styles={ styles2.homecontainer_body }>
                    <View style={ styles2.homecontainer_separator }>
                         <Text style={ styles2.homecontainer_separatortitle }>Menu</Text>
                    </View>
                    <TouchableOpacity onPress={ goToBalance }>
                        <View style={ styles2.homecontainer_option }>
                            <Foundation style={ styles2.homecontainer_menuicon__mobile } name='dollar' size={42}></Foundation>
                            <View style={ styles2.item }>
                                <Text style={ styles2.homecontainer_menutitle }>Consulta tu saldo</Text>
                                <Text style={ styles2.homecontainer_menuitem }>Verifica cuanto saldo le resta tu servicio.</Text>    
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ goToHomologation }>
                        <View style={ styles2.homecontainer_option }>
                            <Foundation style={ styles2.homecontainer_menuicon__mobile } name='mobile' size={45}></Foundation>
                            <View style={ styles2.item }>
                                <Text style={ styles2.homecontainer_menutitle }>Homologacion</Text>
                                <Text style={ styles2.homecontainer_menuitem }>Consulta informacion de homologaciones.</Text>    
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={ styles2.homecontainer_option }>
                        <Foundation style={ styles2.homecontainer_menuicon } name='comment' size={45}></Foundation>
                        <View style={ styles2.item }>
                            <Text style={ styles2.homecontainer_menutitle }>Reclamos</Text>
                            <Text style={ styles2.homecontainer_menuitem }>Registra quejas sobre inconformidades en el servicio.</Text>    
                        </View>
                    </View>
                </View>
                <View style={ styles2.homecontainer_separator }>
                        <Text style={ styles2.homecontainer_separatortitle }>Abierto recientemente</Text>
                </View>
                <View style={ styles2.homecontainer_quickaccess }></View>
                <View style={ styles2.homecontainer_separator }>
                        <Text style={ styles2.homecontainer_separatortitle }>Accesos directos</Text>
                </View>
                <View style={ styles2.homecontainer_quickaccess } horizontal='true'>
                    <View style={ styles2.homecontainer_quickaccessContent }>
                        <TouchableOpacity style={ styles2.homecontainer_quickcard }>
                            <Foundation style={ styles2.homecontainer_quickcardicon } name='dollar' size={45}></Foundation>
                            <Text style={ styles2.homecontainer_quickaccestext } >Homologacion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles2.homecontainer_quickcard }>
                            <Foundation style={ styles2.homecontainer_quickcardicon } name='mobile' size={45}></Foundation>
                            <Text style={ styles2.homecontainer_quickaccestext } >Homologacion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles2.homecontainer_quickcard }>
                            <Foundation style={ styles2.homecontainer_quickcardicon } name='comment' size={45}></Foundation>
                            <Text style={ styles2.homecontainer_quickaccestext } >Homologacion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={ styles2.homecontainer_menubar }>
                <TouchableOpacity hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}>
                    <Foundation  name='home' style={ styles2.homecontainer_menubaricon } size={30}></Foundation>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}>
                    <Foundation  name='torso' style={ styles2.homecontainer_menubaricon } size={30}></Foundation>
                </TouchableOpacity>
            </View>
        </View>
    )
}

