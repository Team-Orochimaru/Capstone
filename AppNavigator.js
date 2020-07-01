import { createStackNavigator } from 'react-navigation';
import Login from './components/Login.js'

const AppNavigator = createStackNavigator({
    Login: {screen: Login},
})