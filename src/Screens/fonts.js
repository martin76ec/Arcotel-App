import * as Font from 'expo-font';


export const getFonts = () => Font.loadAsync({
    //OPEN SANS
    'opensans-regular': require('../../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'opensans-bold': require('../../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    'opensans-extrabold': require('../../assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf'),
    'opensans-light': require('../../assets/fonts/Open_Sans/OpenSans-Light.ttf'),
    //ROBOTO 
    'roboto-regular': require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'roboto-light': require('../../assets/fonts/Roboto/Roboto-Light.ttf')
});//
