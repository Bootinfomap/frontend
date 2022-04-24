import PostListItem from './PostListItem';
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
  
export default PostList;  