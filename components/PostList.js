import PostListItem from './PostListItem';
import React, { useState } from 'react';
import {

  ScrollView,

  StyleSheet,


  RefreshControl,

} from 'react-native';
import { useAppSelector } from '../app/hooks';

const PostList = () => {

  const posts = useAppSelector((state) => state.postReducer.posts);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={listStyles.listContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={100}
        />
      }
    >
      {posts.map(post => (
        <PostListItem
          key={post.idx}
          post={post}
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