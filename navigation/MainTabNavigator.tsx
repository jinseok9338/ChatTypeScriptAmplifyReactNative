import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTopTab = createMaterialTopTabNavigator<MainTabParamList>();
console.log(MainTopTab.Navigator.displayName)

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();
  
 

  return (
    <MainTopTab.Navigator
      initialRouteName="Camera"
      
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
        showIcon:true,
     
      style:{
        backgroundColor: Colors[colorScheme].tint
      },
      indicatorStyle:{
        backgroundColor:Colors[colorScheme].background,
        height:3
      },
      labelStyle:{
        fontWeight:"bold"
      } }}>
      <MainTopTab.Screen
        name="Camera"
        component={TabOneNavigator}
        
        options={{
          tabBarLabel:()=>null,
          tabBarIcon: ({ color }) => <Entypo name="camera" size={22} color={color} />,
        }}
      />
      <MainTopTab.Screen
        name="Chats"
        component={TabTwoNavigator}

      />
         <MainTopTab.Screen
        name="Status"
        component={TabTwoNavigator}
  
      />
         <MainTopTab.Screen
        name="Calls"
        component={TabTwoNavigator}
   
      />
    </MainTopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title',headerShown:false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title',headerShown:false }}
      />
    </TabTwoStack.Navigator>
  );
}
