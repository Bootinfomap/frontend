import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
import InfoScreen from './InfoScreen';
import QnAScreen from './QnAScreen';
import { useNavigation } from '@react-navigation/native';
import { SettingContentType } from '../components/_type/generalType';
import { UserStackParamList } from '../components/_type/navigationType';
import {StackNavigationProp} from '@react-navigation/stack';

type UserScreenProp = StackNavigationProp<UserStackParamList,'Main'>;

const Stack = createNativeStackNavigator<UserStackParamList>();

function Element() {
  //goodbye: priority-high or undo or directions-run
  // 각 리스트를 클릭 시 사용할 함수, 파일을 따로 만들어도 좋을것 같습니다
  const navigation = useNavigation<UserScreenProp>();
  //각 콘텐츠, id는 인덱스, iconcolor는 기본적으로 파랑, contentcolor는 글자의 색, contentfunc에 클릭하면 작동할 것
  const contents:Array<SettingContentType> = [
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
      iconName: 'information',
      contentName: '정보',
      contentFunc: () => {
        navigation.navigate('Info');
      },
    },
    {
      index: 2,
      iconName: 'comment-question',
      contentName: '문의하기',
      contentFunc: () => {
        navigation.navigate('QnA');
      },
    },
    {
      index: 3,
      iconName: 'logout',
      contentName: '로그아웃',
      contentFunc: () => {
        navigation.popToTop();
      },
    },
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
      <Stack.Screen name="Info" component={InfoScreen} options={options} />
      <Stack.Screen name="QnA" component={QnAScreen} options={options} />
    </Stack.Navigator>
  );
}

//계정 공지사항 정보 문의하기 로그아웃 탈퇴하기