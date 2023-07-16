import Header from "./Header";
import Footer from "./Footer";
import { styled } from "@mui/material";

interface LayoutProps{
    children?: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return(
        <LayoutWrapper>
            <Header />

            <>
                {props.children}
            </>
            
            <Footer />
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled('div')(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}))