import React, {useEffect} from 'react';
import {Platform, PermissionsAndroid, BackHandler, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './app/store';
import {Provider} from 'react-redux';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import ReportScreen from './screens/ReportScreen';
import {RootStackParamList} from './components/_type/generalType';

const Stack = createNativeStackNavigator<RootStackParamList>();

async function requestPermissions() {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}

export default function App() {
  requestPermissions();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '확인', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerBackVisible: false}}>
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
