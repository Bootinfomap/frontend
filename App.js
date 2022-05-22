import React from 'react';
import {Platform, PermissionsAndroid} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './app/store';
import {Provider} from 'react-redux';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import ReportScreen from './screens/ReportScreen';
import { sideAppear } from './const/FilterAnimation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native'

const Stack = createNativeStackNavigator();

async function requestPermissions(){
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}

export default function App() {
  requestPermissions();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            options={{
              title: 'BootInfoMap',
              headerStyle: {backgroundColor: '#0092ff'},
              headerTintColor: '#fff',
            }}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen
            name="Report"
            component={ReportScreen}
            options={{
              title: 'Report',
              headerStyle: {
                backgroundColor: '#b53e04',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
