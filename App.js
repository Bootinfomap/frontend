import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import {store} from './app/store';
import {Provider} from 'react-redux';
import ReportScreen from './screens/ReportScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
          <Stack.Screen
          name="Report"
          component={ReportScreen}
          options={{
            title: 'R E P O R T',
            headerStyle: {
              backgroundColor: '#b53e04',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 20,
            marginBottom: 20,

            },
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
