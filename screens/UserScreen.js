  //goodbye: priority-high or undo or directions-run
  // 각 리스트를 클릭 시 사용할 함수, 파일을 따로 만들어도 좋을것 같습니다
  const navigation = useNavigation();
      index: 4,
      contentName: '로그아웃',
      contentFunc: () => {
        navigation.popToTop();
      },
    },
  ];
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
