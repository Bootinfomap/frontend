import React, {Fragment, Component, useState}from 'react';
import type {Node} from 'react';
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

const PostInsert = ({onAddPost}) => {
  const [newTitleItem, setNewTitleItem] = useState('');
  const [newCateItem, setNewCateItem] = useState('');
  const addPostHandler = () => {
    onAddPost({title: newTitleItem,category:newCateItem});
    setNewTitleItem('');
    setNewCateItem('');
    Keyboard.dismiss();
  };

  return (
    <View style={insertStyles.inputContainer}>
      <TextInput
        style={insertStyles.category}
        placeholder=''
        value={newCateItem}
        onChangeText={(category) => setNewCateItem(category)}
        autoCorrect={false}
        placeholderTextColor={'#999'}
        maxLength={1}
      />
      <TextInput
        style={insertStyles.input}
        placeholder="Title"
        value={newTitleItem}
        onChangeText={(title) => setNewTitleItem(title)}
        placeholderTextColor={'#999'}
        autoCorrect={false}
        maxLength={200}
        multiline={true}
      />
      <View style={insertStyles.button}>
        <Button title={'+'} onPress={addPostHandler} />
      </View>
    </View>
  );
};

const insertStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#cfe2f3',
  },
  input: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 10,
    backgroundColor:'white',
    height:40,
    color:'black'
  },
  button: {
    marginRight: 10,
    height:35,
    width:35,
    backgroundColor:'blue',
    marginLeft:10,
  },
  category: {
    fontSize: 20,
    textAlign:'center',
    marginLeft: 10,
    backgroundColor:'white',
    marginVertical:10,
    height:40,
    width:40,
    color:'black'
  }
});

const PostList = ({post}) => {
  return (
    <ScrollView contentContainerStyle={listStyles.listContainer}>
      {post.map(post => (
        <PostListItem
          key={post.idx}
          userid={post.userid}
          ago={post.ago}
          category={post.category}
          title={post.title}
          like={post.like}
          dislike={post.dislike}
        />
      ))}
    </ScrollView>
  );
};

const listStyles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

const PostListItem = ({userid,ago,category,title,like,dislike}) => {
  const [likeNum,setLikeNum]=useState(like);
  const [dislikeNum,setDislikeNum]=useState(dislike);
  return (
  <View style={postListStyles.exContainer}>
    <View style={postListStyles.inContainer}>
      <Text style={postListStyles.agoNuserid}>
        {userid}
      </Text>
      <Text style={postListStyles.agoNuserid}>
        {ago}
      </Text>
    </View>
    <View style={postListStyles.inContainer}>
      <Text style = {postListStyles.category}>
        {category}
      </Text>
      <Text style={postListStyles.title}>
        {title}
      </Text>
    </View>
    <View style={postListStyles.likeContainer}>
        <TouchableOpacity style={postListStyles.likeNdislike} onPress={()=>{setLikeNum(likeNum+1)}}>
           <Text>👍 : {likeNum}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postListStyles.likeNdislike} onPress={()=>{setDislikeNum(dislikeNum+1)}}>
           <Text>👎 : {dislikeNum}</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
};

const postListStyles = StyleSheet.create({
  inContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exContainer: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.75,
    alignItems:'flex-start',
  },
  likeContainer:{
    flex:1,
    flexDirection:'row',

  },
  likeNdislike:{
    fontWeight:'bold',
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
    color:'black',
  },
  title: {
    flex: 5,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    width: 100,
    color:'black',
    marginRight: 10,
  },
  category: {
    fontSize: 20,
    marginVertical:20,
    marginLeft: 10,
    width: 35,
    height: 35,
    color:'black',
    borderColor:'#073763',
    borderWidth:1,
    textAlign:'center',
    justifyContent:'center',
  },
  agoNuserid: {
      fontSize: 15,
      marginVertical: 5,
      marginLeft: 20,
      color:'#444444',

    },
});




