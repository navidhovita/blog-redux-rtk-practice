import PageIntroSection from "@/components/Sections/PageIntroSection";
import RecentPostsSection from "@/components/Sections/RecentPostsSection";
import { getPosts } from "@/store/actions/blog";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Root = () => {
    const posts = useSelector((state) => state.blog.posts)

    useEffect(() => {
        getPosts();
    }, [])

    return(
        <>
            <PageIntroSection text="This is my blog!" />
            <RecentPostsSection posts={posts} />
        </>
    )
}

export default Root;