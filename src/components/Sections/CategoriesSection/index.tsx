import { styled } from "@mui/material";
import { SectionWrapper, SectionContainer } from "@/components/Major/PremadeElements";
import Category from "@/components/Major/Category";

const CategoriesSection = () => {
    return(
        <SectionWrapper>
            <SectionContainer>
                <CategoriesContainer>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </CategoriesContainer>
            </SectionContainer>
        </SectionWrapper>
    )
}

const CategoriesContainer = styled('div')(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
}))

export default CategoriesSection;