import React, { useState } from 'react';
//Fonts dependencies 
//ANCHOR fix or delete this: import getFonts from './src/Screens/fonts';
import { AppLoading } from 'expo';
//Screens import
import Home from './src/Screens/home';
//Navigation
import Navigator from './src/Routes/homeStack';

const getFonts = () => Font.loadAsync({
  //OPEN SANS
  'opensans-regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
  'opensans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
  'opensans-extrabold': require('./assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf'),
  'opensans-light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
  //ROBOTO 
  'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf')
});//


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator/>
    );
  } else {
    return (
      <AppLoading
      startAsync={ getFonts }
      onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}






 
