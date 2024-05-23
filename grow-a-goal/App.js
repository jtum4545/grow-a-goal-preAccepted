import { Settings, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Path} from 'react-native-svg'
import { useReState } from "@raulpesilva/re-state";

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

export default function App() {
  const [tabBackground] = useReState("tabBackground", '#F6FFBD')
  const [itemColour, setItemColour] = useReState("itemColour", '#7E6767')
  const [initialTab] = useReState("initialTab", "Profile");

  return   (
    <View style={styles.container}>

      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={initialTab}
        screenOptions={({route}) => ({
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={focused ? [styles.tabLabelFocused, { color: itemColour }]: [styles.tabLabelUnfocused, {color: itemColour}]}>
                {route.name}
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => {
            let tabName;
            let tintColorVar = null;
            let marginBottomVar = 0;
            size += size * 0.2;
            if(route.name === "Profile"){
              tabName = "profile";
              tintColorVar = itemColour;
              size *= 1.2;
            } else if (route.name === "Add") {
              tabName = "add";
              tintColorVar = itemColour;
              size *= 1.7;
              marginBottomVar = 20;
            } else if (route.name === "Tree") {
              tabName = "tree";
              size *= 3.5;
              marginBottomVar = 60;
            } else if (route.name === "View") {
              tabName = "view";
              tintColorVar = itemColour;
              size *= 1.7;
              marginBottomVar = 20;
            } else if (route.name === "Settings") {
              tabName = "settings";
              tintColorVar = itemColour;
              size *= 1.5;
            }
            return <Image source={tabIcons[tabName]} 
                          style={{width: size, height: size, tintColor: tintColorVar, marginBottom: marginBottomVar}} 
                          />;
          },
          tabBarBackground: () => {
            return(<Svg style={styles.tabBarSvg} height="150%" width="100%" viewBox="-40 0 180 50">
                      <Path
                        d="M 2 47 Q 49 6 99 47 L 120 70 L -19 70 Z" //Made using https://yqnn.github.io/svg-path-editor/
                        fill={tabBackground}
                      />
                    </Svg>)      
          },
          tabBarStyle: {
            backgroundColor: tabBackground,
            height: 80,
          },
          headerShown: false,
        })} 
        >
          <Tab.Screen name="Profile" component={ProfileScreen}/>
          <Tab.Screen name="Add" component={AddScreen}/>
          <Tab.Screen name="Tree" component={TreeScreen}/>
          <Tab.Screen name="View" component={ViewScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabBarSvg :{
    position: 'absolute',
    bottom: '100%',
  },

  tabLabelFocused : {
    color: "#7E6767",
    fontWeight: 'bold',
    fontSize: 20,
  },
  tabLabelUnfocused : {
    color: "#7E6767",
    fontWeight: 'bold',
    fontSize: 15,
  }
});
