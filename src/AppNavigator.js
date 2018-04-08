import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import ListView from './screens/ListView';


const MyApp = StackNavigator({
    Home: { screen: Home },
    ListView: { screen: ListView },
}, {
        initialRouteName: 'Home',
        headerMode: 'none',
    });

export default MyApp;
