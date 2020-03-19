// Main Theme file, this is similar to a CSS
// ANCHOR This file is made with BEM (Block Element Modifier) standard, check more in http://getbem.com/

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    container_content: {
        flex: 6,
    },
    container_title: {
        //fontFamily: 'opensans-bold',
        fontSize: 24,
        marginVertical: 40,
        marginHorizontal: 20,
    },
    container_pharagraph: {
        //fontFamily: 'roboto-regular',
        fontSize: 16,
        textAlign: 'justify',
        marginHorizontal: 20,
    },
});

export const styles2 = StyleSheet.create({
    homecontainer: {
        flex: 1,
    },
    homecontainer_body: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    homecontainer_menubar: {
       backgroundColor: '#fff',
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       padding: 10,
    },
    homecontainer_item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    homecontainer_separator: {
        height: 48,
        flexDirection: 'row',
        backgroundColor: '#00000029',
    },
    homecontainer_option: {
        padding: 20,
        flexDirection: 'row',
    },
    homecontainer_menuicon: {
        marginRight: 10,
        alignSelf: 'center',
    },
    homecontainer_menuicon__mobile: {
        marginLeft: 5,
        marginRight: 20,
        alignSelf: 'center',
    },
    homecontainer_separatortitle: {
        //fontFamily: 'opensans-light',
        fontSize: 12,
        letterSpacing: 2,
        color: '#6e6e6ea6',
        alignSelf: 'center',
        marginLeft: 10,
    },
    homecontainer_menutitle: {
        //fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#000000b8',
    },
    homecontainer_menuitem: {
        //fontFamily: 'roboto-light',
        fontSize: 12,
        color: '#0000008a'
    },  
    homecontainer_menubaricon: {
        color: '#00000057',
    },
    homecontainer_quickaccess: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    homecontainer_quickcard: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 110,
        height: 120,
        backgroundColor: '#0000008a',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        marginRight: 10
    },
    homecontainer_quickcardicon: {
        alignSelf: 'center',
        color: '#fff',
    },
    homecontainer_quickaccestext: { 
        textAlign: 'center',
        color: '#fff',
    },
    homecontainer_quickaccessContent: {
        flexDirection: 'row',
        flex: 1,
    }
});
