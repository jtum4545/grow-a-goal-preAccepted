import { Settings, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AsyncStorage from '@react-native-async-storage/async-storage';


import SettingsScreen from './Settings';
import ProfileScreen from './Profile';
import TreeScreen from './Tree';
import ViewScreen from './View';
import AddScreen from './Add';

const Tab = createBottomTabNavigator();

const tabIcons = {
  profile: require("./assets/tab-icons/profile-icon.png"),
  add: require("./assets/tab-icons/add-icon.png"),
  tree: require("./assets/tab-icons/tree-icon.png"),
  view: require("./assets/tab-icons/view-icon.png"),
  settings: require("./assets/tab-icons/settings-icon.png"),

}

const lightThemeColours = {
  background: '#A2FCAB',
  tabBackground: '#F6FFBD',
  borderAndIcons: '#7E6767'
};
 
const darkThemeColours = {
  background: '#355F3A',
  tabBackground: '#737373',
  borderAndIcons: '#D0CBCB'
};

export default function App() {
  return   (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let tabName
          if(route.name === "Profile"){
            tabName = "profile"
          } else if (route.name === "Add") {
            tabName = "add"
          } else if (route.name === "Tree") {
            tabName = "tree"
          } else if (route.name === "View") {
            tabName = "view"
          } else if (route.name === "Settings") {
            tabName = "settings"
          }
          return <Image source={tabIcons[tabName]} style={{resizeMode: 'cover', width: size, height: size}} />;
        }
       })} 
      >
        <Tab.Screen name="Profile" component={ProfileScreen}/>
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
