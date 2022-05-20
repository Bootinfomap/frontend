import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts : [],
}


export const postSlice = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        addPost: (state,action) => {
            state.posts = [{
                idx: Math.random().toString(),
                userid: 'ID',
                title: action.payload.title,
                category: action.payload.category,
                like:0,
                dislike:0,
                latitude:action.payload.latitude,
                longitude:action.payload.longitude
                },
                ...state.posts,
            ]},
        removePost: (state,action) => {
            state.posts = state.posts.filter(post => post.idx !== action.payload.id)
        },
        revisePost: (state,action) => {
            state.posts = state.posts.map(post => {
                if (post.idx == action.payload.id)
                    return action.payload.newPost;
                else
                    return post;
            })
        },
    },
  })
  
export const { addPost, removePost, revisePost} = postSlice.actions;

export default postSlice.reducer;