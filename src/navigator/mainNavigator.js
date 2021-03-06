import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen55012Navigator from '../features/BlankScreen55012/navigator';
import BlankScreen65011Navigator from '../features/BlankScreen65011/navigator';
import BlankScreen5009Navigator from '../features/BlankScreen5009/navigator';
import BlankScreen4782Navigator from '../features/BlankScreen4782/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen55012: { screen: BlankScreen55012Navigator },
BlankScreen65011: { screen: BlankScreen65011Navigator },
BlankScreen5009: { screen: BlankScreen5009Navigator },
BlankScreen4782: { screen: BlankScreen4782Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
