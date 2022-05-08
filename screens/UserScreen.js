import React from 'react'
import {View,ScrollView,SafeAreaView,StyleSheet,Text,TouchableOpacity} from 'react-native'
import SettingContent from '../components/SettingContent'

export default function UserScreen() {
  //goodbye: priority-high or undo or directions-run
  // 각 리스트를 클릭 시 사용할 함수, 파일을 따로 만들어도 좋을것 같습니다
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
  };

  const goodbye = () => {
    console.log('goobye');
  };

  //각 콘텐츠, id는 인덱스, iconcolor는 기본적으로 파랑, contentcolor는 글자의 색, contentfunc에 클릭하면 작동할 것  
  const contents = [
    {index: 0, iconColor:"#0092ff", iconName: "account-circle", contentName:"계정", contentColor:'#222222',  contentFunc: account},
    {index: 1, iconColor:"#0092ff", iconName: "priority-high", contentName:"공지사항", contentColor:'#222222', contentFunc: announce},
    {index: 2, iconColor:"#0092ff", iconName: "info-outline", contentName:"정보",  contentColor:'#222222', contentFunc: infomation},
    {index: 3, iconColor:"#0092ff", iconName: "question-answer", contentName:"문의하기", contentColor:'#222222',  contentFunc: qna},
    {index: 4, iconColor:"#0092ff", iconName: "logout", contentName:"로그아웃", contentColor:'#222222',  contentFunc: logout},
    {index: 5, iconColor:"#dd0002", iconName: "remove", contentName: "탈퇴하기", contentColor:'#df424f',  contentFunc: goodbye},
  ];
  //index: number, iconcolor,iconname,contentname,contentcolor: string, contentfunc: console.log("~~")
  return (
    <SafeAreaView style={{backgroundColor: '#0092ff',}}>
      <SafeAreaView style={userStyles.title}>
        <Text style={{
          color:'#fff',
          fontSize: 30,
          fontWeight: 'bold', 
      }}>U S E R</Text>
      </SafeAreaView >
      <View style={userStyles.contentList}>
        {contents.map(content => (
            <SettingContent
              key={content.index}
              content={content}
            />
        ))}
      </View>
    </SafeAreaView>
  )
}

const userStyles = StyleSheet.create({
  contentList: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#fff'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22.5,
    paddingBottom: 45,
  },
  
})

//계정 공지사항 정보 문의하기 로그아웃 탈퇴하기  
