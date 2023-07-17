import store from "..";
import { addPosts, addPost } from "../slices/blogSlice";
import httpClient from "./httpClient";

export const getPosts = async () => {
    const res = await httpClient().get("/api/blogs?populate=*");
    store.dispatch(
        addPosts(res.data)
    )
}

export const getPostByID = async (id: number | string | undefined) => {
    const res = await httpClient().get(`/api/blogs/${id}`);
    store.dispatch(
        addPost(res.data)
    )
}