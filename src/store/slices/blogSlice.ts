import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "@/models/blog";

interface BlogSliceProps{
    posts: PostType[];
    post: PostType | null;
}

const initialState: BlogSliceProps = {
    posts: [],
    post: null
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers:{
        addPosts(state, action: any){
            state.posts = action.payload;
        },

        addPost(state, action: any){
            state.post = action.payload;
        }
    }
})

export default blogSlice;
export const { addPosts, addPost } = blogSlice.actions;