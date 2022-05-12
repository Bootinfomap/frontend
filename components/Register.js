import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import {Input, Button} from '@rneui/themed';
import {TextInput, Button, HelperText} from 'react-native-paper';

export default function Register({onPress}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const [emailWarn, setEmailWarn] = useState(false);
  const [passwordWarn, setPasswordWarn] = useState(false);
  const [passwordCheckWarn, setPasswordCheckWarn] = useState(false);
  https: return (
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
      <TextInput
        label="Password check"
        value={passwordCheck}
        secureTextEntry
        onChangeText={text => {
          setPasswordCheck(text);
        }}
      />
      <HelperText type="error" visible={passwordCheckWarn}>
        Doesn't match password
      </HelperText>
      <Button
        mode="contained"
        style={{marginBottom: 10}}
        onPress={() => {
          setEmailWarn(email.match(emailRegExp) === null);
          setPasswordWarn(password.match(passwordRegExp) === null);
          setPasswordCheckWarn(password !== passwordCheck);
          if (!(emailWarn || passwordWarn || passwordCheckWarn)) {
            console.log('register successed');
          }
        }}>
        SIGN UP
      </Button>
      <Button mode="outlined" onPress={() => onPress(true)}>
        LOGIN
      </Button>
    </View>
  );
}
