import React, {useState}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import PostInsert from '../components/PostInsert';
import PostList from '../components/PostList';

export default function FeedScreen() {
  // posts: {idx, user_idx, title, category, public, location, create_at, modified_at, deleted_at}
  const [posts, setPosts] = useState([]);
  var date= new Date();
  var tempDate= new Date(2022,3,13,9,47);
  const makeAgo = ({nowDate,preDate}) => {
    let str='';
    let timeArray=[0,0,0,0,0];
    let strArray=['y ','M ','d ','h ','m '];
    let plusArray=[12,0,24,60];
    let monthArray=[31,28,31,30,31,30,31,31,30,31,30,31];
    plusArray[1]=monthArray[preDate.getMonth()] + 1;
    timeArray[0]=nowDate.getFullYear()-preDate.getFullYear();
    timeArray[1]=nowDate.getMonth()-preDate.getMonth();
    timeArray[2]=nowDate.getDate()-preDate.getDate();
    timeArray[3]=nowDate.getHours()-preDate.getHours();
    timeArray[4]=nowDate.getMinutes()-preDate.getMinutes();
    for(let i=4;i>0;i--){
        if (timeArray[i]<0){
            timeArray[i-1]=timeArray[i-1]-1;
            timeArray[i]=timeArray[i]+plusArray[i-1];
            timeArray[i].toString();
        }
    }
    while(timeArray[0]=='0'){
        timeArray.shift();
        strArray.shift();
    }
    for(let i=0;i<timeArray.length;i++){
        str = str + timeArray[i] + strArray[i];
    }
    return str + ' ago';
  };
  const addPost = ({title, category}) => {
    setPosts([
      {
      idx: Math.random().toString(),
      userid: 'YS',
      ago:makeAgo({nowDate:date,preDate:tempDate}),
      title: title,
      category: category,
      like:0,
      dislike:0,
      },
      ...posts,
    ]);
  };

  return (
    <SafeAreaView style={feedStyles.container}>
      <Text style={feedStyles.appTitle}>F E E D</Text>
      <View style={feedStyles.card}>
        <PostInsert onAddPost={addPost} />
        <PostList post={posts} />

      </View>
    </SafeAreaView>
  );
};

const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners


  },
});




