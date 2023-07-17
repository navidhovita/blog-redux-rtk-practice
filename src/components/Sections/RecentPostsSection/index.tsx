import { SectionWrapper, SectionContainer } from "@/components/Major/PremadeElements";
import { styled } from "@mui/material";
import Post from "@/components/Major/Post";

const RecentPostsSection = (props: any) => {
    console.log(props.posts.data);
    return(
        <SectionWrapper>
            <SectionContainer>

                <PostsContainer>

                    {props.posts.data && props.posts.data.length ? (
                        <>
                            {props.posts.data.map((post: any, i:number) => (
                                <Post
                                    key={i}
                                    post={post}
                                />
                            ))}
                        </>
                    ) : (<p>no posts yet</p>)}

                </PostsContainer>

            </SectionContainer>
        </SectionWrapper>
    )
}

const PostsContainer = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    gap: "10px"
}))

export default RecentPostsSection;