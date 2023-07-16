import { styled } from "@mui/material";
import { SectionWrapper, SectionContainer } from "@/components/Major/PremadeElements";

interface Props{
    text: string;
}

const PageIntroSection = (props: Props) => {
    return(
        <SectionWrapper>
            <SectionContainer>
                <Title>
                    {props.text}
                </Title>
            </SectionContainer>
        </SectionWrapper>
    )
}

const Title = styled('h1')(({ theme }) => ({
    fontSize: "4rem",
    color: "indianred"
}))

export default PageIntroSection;