import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/home';
import Balance from '../Screens/balance';
import Homologation from '../Screens/homologation';


const screens = {
    Home: {
        screen: Home
    },
    Balance: {
        screen: Balance
    },
    Homologation: {
        screen: Homologation
    },
}

const HomeStack =  createStackNavigator(screens);

export default createAppContainer(HomeStack)



