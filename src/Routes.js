import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { SettingsContext } from './containers/SettingsContainer';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const Routes = () => {
  const { i18n } = React.useContext(SettingsContext);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContentOptions={{
          title: 'Bela',
          activeTintColor: '#FF00F0',
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: i18n.t('home') }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
