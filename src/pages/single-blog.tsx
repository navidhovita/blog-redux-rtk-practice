import SinglePostSection from "@/components/Sections/SinglePostSection";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostByID } from "@/store/actions/blog";
import { useSelector } from "react-redux";

const SingleBlog = () => {
    const post = useSelector(state => state.blog.post)
    const params = useParams();

    useEffect(() => {
        getPostByID(params.id);
    }, [])

    return(
        <>
            <SinglePostSection post={post} />
        </>
    )
}

export default SingleBlog;