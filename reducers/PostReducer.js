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
                },
                ...state.posts,
            ]},
        removePost: (state,action) => {
            state.posts = state.posts.filter(post => post.idx !== action.payload.id)
        },
    },
  })
  
export const { addPost, removePost} = postSlice.actions;

export default postSlice.reducer;