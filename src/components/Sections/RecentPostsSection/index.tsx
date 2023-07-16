import { SectionWrapper, SectionContainer } from "@/components/Major/PremadeElements";
import { styled } from "@mui/material";
import Post from "@/components/Major/Post";

const RecentPostsSection = () => {
    return(
        <SectionWrapper>
            <SectionContainer>

                <PostsContainer>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
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