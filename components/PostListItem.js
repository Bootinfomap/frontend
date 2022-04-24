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
  
export default PostListItem;  