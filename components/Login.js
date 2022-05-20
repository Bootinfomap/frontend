import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  Button,
  HelperText,
  RadioButton,
  Switch,
  Text,
} from 'react-native-paper';

export default function Login({onPress}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarn, setEmailWarn] = useState(false);
  const [passwordWarn, setPasswordWarn] = useState(false);
  const [remember, setRemember] = useState(false);
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <HelperText type="error" visible={emailWarn}>
        Please check your Email
      </HelperText>
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <HelperText type="error" visible={passwordWarn}>
        Please check your Password
      </HelperText>
      <TouchableOpacity
        style={{flexDirection: 'row', alignContent: 'center', marginBottom: 10}}
        onPress={() => setRemember(!remember)}>
        <Switch value={remember} onValueChange={() => setRemember(!remember)} />
        <View style={{alignSelf: 'center'}}>
          <Text>Remember Me</Text>
        </View>
      </TouchableOpacity>
      <Button
        mode="outlined"
        style={{marginBottom: 10}}
        onPress={() => {
          setEmailWarn(email === '');
          setPasswordWarn(password === '');
          if (!(emailWarn || passwordWarn)) {

            
          }
          navigation.navigate('Main');
        }}>
        Login
      </Button>
      <Button mode="contained" onPress={() => onPress(false)}>
        Register
      </Button>
    </View>
  );
}
