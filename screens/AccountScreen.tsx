import React from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function AccountScreen() {
  const userInfo = {
    ID: 'USER_ID',
  }; // API를 통해 얻게 됨
  return (
    <View style={{padding: 20}}>
      <TextInput
        style={{marginBottom: 10}}
        label="ID"
        disabled
        value={userInfo.ID}
      />
      <TextInput
        style={{marginBottom: 10}}
        label="New Password"
        secureTextEntry
      />
      <TextInput
        style={{marginBottom: 10}}
        label="New Password Check"
        secureTextEntry
      />
      <Button
        mode="contained"
        style={{backgroundColor: '#0092ff', marginBottom: 10}}
        onPress={() => console.log('REVISION')}>
        회원정보 수정
      </Button>
      <Button
        mode="contained"
        style={{backgroundColor: '#cc0000'}}
        onPress={() => console.log('EXIT')}>
        회원 탈퇴
      </Button>
    </View>
  );
}
