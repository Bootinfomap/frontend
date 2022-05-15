import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MapScreen from './MapScreen';
import FeedScreen from './FeedScreen';
import UserScreen from './UserScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen() {
  //icon map or room
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{showIcon: true}}
      shifting>
      <Tab.Screen
        name="Map"
        options={{
          tabBarLabel: '지도',
          tabBarIcon: ({color}) => <Icon name="map" color={color} size={24} />,
          tabBarColor: '#0092ff',
        }}
        component={MapScreen}
      />
      <Tab.Screen
        name="Feed"
        options={{
          tabBarLabel: '피드',
          tabBarIcon: ({color}) => (
            <Icon name="wysiwyg" color={color} size={24} />
          ),
          tabBarColor: '#0092ff',
        }}
        component={FeedScreen}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarLabel: '사용자',
          tabBarIcon: ({color}) => (
            <Icon name="sentiment-satisfied-alt" color={color} size={24} />
          ),
          tabBarColor: '#0092ff',
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
}
