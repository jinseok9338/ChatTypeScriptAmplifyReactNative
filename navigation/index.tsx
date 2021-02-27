import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View } from "react-native";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ChatDetailScreen from "../screens/ChatDetailScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name='Root'
        component={MainTabNavigator}
        options={{
          title: "ChatApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
                marginRight: 10,
              }}>
              <FontAwesome5 name='search' size={22} color='white' />
              <Entypo name='dots-three-vertical' size={22} color='white' />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name='ChatDetailScreen'
        component={ChatDetailScreen}
        options={({ route }) => ({
          title: route.params?.name || undefined,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-around",
                marginRight: 10,
              }}>
              <FontAwesome5 name='video' size={22} color='white' />
              <MaterialIcons name='call' size={22} color='white' />
              <Entypo name='dots-three-vertical' color='white' size={22} />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
