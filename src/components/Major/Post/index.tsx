import { styled } from "@mui/material";
import engie from "../../../../public/images/engie.jpg";
import { ReadMoreButton } from "../PremadeElements";
import { PostType } from "@/models/blog";

interface Props{
    post: PostType
}

const Post = (props: Props) => {
    return(
        <PostContainer>
            <PostImage src={engie} />
            <PostTitle>
                {props.post.attributes.title}
            </PostTitle>
            <PostDescription>
                {props.post.attributes.desc}
            </PostDescription>
            <PostCategoriesContainer>
                <PostCategory>{props.post.attributes.category.data.attributes.title}</PostCategory>
            </PostCategoriesContainer>
            <ReadMoreButton>
                Read More
            </ReadMoreButton>
        </PostContainer>
    )
}

const PostContainer = styled('div')(({ theme }) => ({
    borderRadius: "30px",
    width: "90%",
    maxWidth: "250px",
    padding: "20px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
}))

const PostImage = styled('img')(({ theme }) => ({
    borderRadius: "20px",
    height: "200px",
    width: "100%",
    objectFit: "cover"
}))

const PostTitle = styled('p')(({ theme }) => ({
    fontWeight: "900",
    fontSize: "1.1rem",
}))

const PostDescription = styled('p')(({ theme }) => ({
    fontWeight: "400",
    fontSize: "0.8rem",
    color: "rgba(0,0,0,0.8)"
}))

const PostCategoriesContainer = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2px"
}))

const PostCategory = styled('span')(({ theme }) => ({
    fontSize: "0.7rem",
    color: "rgba(0,0,0,0.4)"
}))

export default Post;