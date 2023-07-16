import { styled } from "@mui/material";
import { ReadMoreButton } from "../PremadeElements";

const Category = () => {
    return(
        <CategoryContainer>
            <CategoryTitle>
                Category title
            </CategoryTitle>
            <ReadMoreButton>
                Read More
            </ReadMoreButton>
        </CategoryContainer>
    )
}

const CategoryContainer = styled('a')(({ theme }) => ({
    borderRadius: "30px",
    width: "90%",
    maxWidth: "250px",
    padding: "20px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
}))

const CategoryTitle = styled('p')(({ theme }) => ({
    fontWeight: "900",
    fontSize: "1.1rem",
}))

export default Category;