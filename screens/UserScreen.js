<<<<<<< HEAD
import React from 'react'
import {View,ScrollView,SafeAreaView,StyleSheet,Text,TouchableOpacity} from 'react-native'
import SettingContent from '../components/SettingContent'
import { useNavigation } from '@react-navigation/native';
=======
import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {List} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
import NoticeScreen from './NoticeScreen';
import InfoScreen from './InfoScreen';
import QnAScreen from './QnAScreen';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
>>>>>>> 4edb3ce11e04bfa5a41a9680ab40de0635e14d44

function Element() {
  //goodbye: priority-high or undo or directions-run
  // 각 리스트를 클릭 시 사용할 함수, 파일을 따로 만들어도 좋을것 같습니다
  const navigation = useNavigation();
<<<<<<< HEAD
  const account = () => {
    console.log('account');
  };

  const announce = () => {
    console.log('announce');
  };

  const infomation = () => {
    console.log('info');
  };

  const qna = () => {
    console.log('qna');
  };

  const logout = () => {
    console.log('logout');
    navigation.navigate('Login');
  };

  const goodbye = () => {
    console.log('resign');
  };

  //각 콘텐츠, id는 인덱스, iconcolor는 기본적으로 파랑, contentcolor는 글자의 색, contentfunc에 클릭하면 작동할 것  
  const contents = [
    {index: 0, iconColor:"#0092ff", iconName: "account-circle", contentName:" 계 정 ", contentColor:'#222222',  contentFunc: account},
    {index: 1, iconColor:"#0092ff", iconName: "priority-high", contentName:" 공 지 사 항", contentColor:'#222222', contentFunc: announce},
    {index: 2, iconColor:"#0092ff", iconName: "info-outline", contentName:" 정 보 ",  contentColor:'#222222', contentFunc: infomation},
    {index: 3, iconColor:"#0092ff", iconName: "question-answer", contentName:" 문 의 하 기", contentColor:'#222222',  contentFunc: qna},
    {index: 4, iconColor:"#0092ff", iconName: "logout", contentName:" 로 그 아 웃", contentColor:'#222222',  contentFunc: logout},
    {index: 5, iconColor:"#dd0002", iconName: "highlight-off", contentName: " 탈 퇴 하 기", contentColor:'#df424f',  contentFunc: goodbye},
=======
  //각 콘텐츠, id는 인덱스, iconcolor는 기본적으로 파랑, contentcolor는 글자의 색, contentfunc에 클릭하면 작동할 것
  const contents = [
    {
      index: 0,
      iconName: 'account',
      contentName: '계정',
      contentFunc: () => {
        navigation.navigate('Account');
      },
    },
    {
      index: 1,
      iconName: 'android', // 적절한 아이콘을 찾지 못했다.
      contentName: '공지사항',
      contentFunc: () => {
        navigation.navigate('Notice');
      },
    },
    {
      index: 2,
      iconName: 'information',
      contentName: '정보',
      contentFunc: () => {
        navigation.navigate('Info');
      },
    },
    {
      index: 3,
      iconName: 'comment-question',
      contentName: '문의하기',
      contentFunc: () => {
        navigation.navigate('QnA');
      },
    },
    {
      index: 4,
      iconName: 'logout',
      contentName: '로그아웃',
      contentFunc: () => {
        navigation.popToTop();
      },
    },
>>>>>>> 4edb3ce11e04bfa5a41a9680ab40de0635e14d44
  ];
  return (
    <View>
      {contents.map((content, ix) => (
        <List.Item
          key={ix}
          title={content.contentName}
          titleStyle={{color: '#222222'}}
          left={() => <List.Icon color={'#0092ff'} icon={content.iconName} />}
          onPress={content.contentFunc}
        />
      ))}
    </View>
  );
}

export default function UserScreen() {
  const options = {headerShown: false};
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Element} options={options} />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={options}
      />
      <Stack.Screen name="Notice" component={NoticeScreen} options={options} />
      <Stack.Screen name="Info" component={InfoScreen} options={options} />
      <Stack.Screen name="QnA" component={QnAScreen} options={options} />
    </Stack.Navigator>
  );
}

//계정 공지사항 정보 문의하기 로그아웃 탈퇴하기
