import { Settings, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SettingsScreen from './Settings';
import ProfileScreen from './Profile';
import TreeScreen from './Tree';
import ViewScreen from './View';
import AddScreen from './Add';

const Tab = createBottomTabNavigator();

const TabIcons = ({icon}) => {
  return <Image source={require(`./assets/tab-icons/profile-icon.png`)} width={100} height={20} style={{resizeMode: 'cover'}} />;
};


export default function App() {
  return   (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon:({size, focused, color}) =>{
              return <Image source={require(`./assets/tab-icons/profile-icon.png`)} style={{width: size, height:size, resizeMode: 'cover'}} />;
            }
          }}/>
        <Tab.Screen name="Add" component={AddScreen}/>
        <Tab.Screen name="Tree" component={TreeScreen}/>
        <Tab.Screen name="View" component={ViewScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
