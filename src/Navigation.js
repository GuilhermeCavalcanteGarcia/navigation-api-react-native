import { StyleSheet, View } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Form from './screens/Form';
import ImageList from './screens/ImageList';
import AdvicesDay from './screens/AdvicesDay';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: styles.tabBar,
      }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Ionicons
                name={focused ? 'person-add' : 'person-add-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
          tabBarLabel: 'Cadastro',
        }}
      />
      <Tab.Screen
        name="ImageList"
        component={ImageList}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Ionicons
                name={focused ? 'image' : 'image-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
          tabBarLabel: 'Imagens',
        }}
      />
      <Tab.Screen
        name="AdviceDay"
        component={AdvicesDay}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Ionicons
                name={focused ? 'arrow-undo' : 'arrow-undo-outline'}
                size={24}
                color={color}
              />
            </View>
          ),
          tabBarLabel: 'Conselhos',
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'grey',
    display: 'flex',
  },
});
