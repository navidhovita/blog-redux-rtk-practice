import { styled } from "@mui/material";

const Header = () => {
    return(
        <HeaderWrapper>
            <HeaderContainer>
                <MenuOptions>
                    <MenuOption href="blog/">
                        Blog
                    </MenuOption>
                    <MenuOption href="about-us/">
                        About Us
                    </MenuOption>
                    <MenuOption href="contact-us/">
                        Contact Us
                    </MenuOption>
                    <MenuOption href="categories/">
                        Categories
                    </MenuOption>
                </MenuOptions>
                <MenuLogo>
                    Logo
                </MenuLogo>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled('div')(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center"
}))

const HeaderContainer = styled('div')(({ theme }) => ({
    width: "100%",
    padding: "10px 30px",
    maxWidth: "1340px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}))

const MenuOptions = styled('div')(({ theme }) => ({
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}))

const MenuOption = styled('a')(({ theme }) => ({
    padding: "20px",
    fontSize: "1rem",
    transition: "all 0.25s",
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.primary.dark
    }
}))

const MenuLogo = styled('div')(({ theme }) => ({
    color: "red",
    textTransform: "uppercase"
}))


export default Header;