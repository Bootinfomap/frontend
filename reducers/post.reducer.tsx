import {createSlice} from '@reduxjs/toolkit';
import {PostType} from '../components/_type/generalType';

interface PostState {
  posts: Array<PostType>;
}

const initialState: PostState = {
  posts: [
    {
      category: '3',
      dislike: 0,
      id: '0.9227113100703064',
      latitude: 37.564362,
      like: 0,
      longitude: 126.977011,
      title: '123',
      userid: 'ID',
    },
  ],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [
        {
          idx: Math.random().toString(),
          userid: 'ID',
          title: action.payload.title,
          category: action.payload.category,
          like: 0,
          dislike: 0,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
        ...state.posts,
      ];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload.id);
    },
    revisePost: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post.idx == action.payload.id) return action.payload.newPost;
        else return post;
      });
    },
  },
});

export const {addPost, removePost, revisePost} = postSlice.actions;

export default postSlice.reducer;
