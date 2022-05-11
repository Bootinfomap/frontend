import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';

export default function LoginScreen() {
  const [login, setLogin] = useState(true);
  return (
    <View style={styles.container}>
      {login ? <Login onPress={setLogin} /> : <Register onPress={setLogin} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    flex: 1,
    justifyContent: 'center',
  },
});
