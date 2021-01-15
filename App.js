//importing all the libraries for the needed elements
import * as React from 'react';
//import { View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BookDonationScreen from './screens/BookDonationScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppDrawerNavigation} from './components/AppDrawerNavigation';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


//making a default class
export default class App extends React.Component {
  render() {
    return (
//adding SafeAreaProvider
<SafeAreaProvider>

<AppContainer/>
   </SafeAreaProvider>
   
    );
  }
}
//creating SwitchNavigator for easy switching between one screen and another
const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen:WelcomeScreen},
Drawer:{screen:AppDrawerNavigation},
})
//Creating appContainer and adding the Switchnavigator and its contents to it
const AppContainer = createAppContainer(switchNavigator)