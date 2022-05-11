import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PostModal from './PostModal';


const PostListItem = ({ post }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [likeNum, setLikeNum] = useState({ num: post.like, already: false });
  const [dislikeNum, setDislikeNum] = useState({ num: post.dislike, already: false });
  const setPrefer = (likeORdislike, setlike) => {
    if (likeORdislike.already == true) {
      setlike({ num: likeORdislike.num - 1, already: !likeORdislike.already })
    }
    else {
      setlike({ num: likeORdislike.num + 1, already: !likeORdislike.already })
    }
  };

  return (
    <View style={postListStyles.exexContainer}>
      <TouchableOpacity style={postListStyles.exContainer}>
        <View style={postListStyles.inContainer}>
          <Text style={postListStyles.agoNuserid}>
            {post.userid}
          </Text>
          <Text style={postListStyles.agoNuserid}>
            severTime - postTime
          </Text>
        </View>
        <View style={postListStyles.inContainer}>
          <Text style={postListStyles.category}>
            {post.category}
          </Text>
          <Text style={postListStyles.title}>
            {post.title}
          </Text>
        </View>
        <View style={postListStyles.likeContainer}>
          <TouchableOpacity style={postListStyles.likeNdislike} onPress={() => { setPrefer(likeNum, setLikeNum); }}>
            <Text>👍 : {likeNum.num}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={postListStyles.likeNdislike} onPress={() => { setPrefer(dislikeNum, setDislikeNum) }}>
            <Text>👎 : {dislikeNum.num}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={postListStyles.settingArea} onPress={() => { setModalVisible(!modalVisible) }}>
        <Text style={postListStyles.settingText}>⚒</Text>
      </TouchableOpacity>
      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        post = {post}
      />
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
    flex: 9.5,
    alignItems: 'flex-start',
  },
  exexContainer: {
    flex: 1,
    borderBottomColor: '#727272',
    borderBottomWidth: 0.75,
    flexDirection: 'row'
  },
  likeContainer: {
    flex: 1,
    flexDirection: 'row',

  },
  likeNdislike: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
    color: 'black',
  },
  title: {
    flex: 5,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    width: 100,
    color: 'black',
    marginRight: 10,
  },
  category: {
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 10,
    width: 35,
    height: 35,
    color: 'black',
    borderColor: '#073763',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  agoNuserid: {
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20,
    color: '#444444',
  },
  settingArea: {
    flex: 0.5,
    borderColor: '#727272',
    borderLeftWidth: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#2b2b2b',
  },
});


export default PostListItem;  