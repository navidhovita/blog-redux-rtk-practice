import { styled } from "@mui/material";

interface PremadeElementsProps{
    theme?: any;
    width?: string;
    maxWidth?: string;
}

export const SectionWrapper = styled('div')(({ theme, width="100%" }: PremadeElementsProps) => ({
    width: width,
    display: "flex",
    justifyContent: "center"
}))

export const SectionContainer = styled('div')(({ theme, width="90%", maxWidth="1340px" }: PremadeElementsProps) => ({
    width: width,
    maxWidth: maxWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export const ReadMoreButton = styled('a')(({ theme }) => ({
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "indianred",
    color: "white"
}))