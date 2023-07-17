import { SectionWrapper, SectionContainer } from "@/components/Major/PremadeElements";
import { PostType } from "@/models/blog";

interface Props{
    post: PostType;
}

const SinglePostSection = (props: Props) => {
    return(
        <SectionWrapper>
            <SectionContainer>
                {props.post ? (
                    <>
                        <p>
                            {props.post.data.attributes.title}
                        </p>
                        <p>
                            {props.post.data.attributes.desc}
                        </p>  
                    </>
                ) : null}
            </SectionContainer>
        </SectionWrapper>
    )
}

export default SinglePostSection;