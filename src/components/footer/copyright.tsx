import { Box, styled, Skeleton } from "@mui/material";

const FooterStyle = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
}))

const Copyright = () => {
  return (
    <FooterStyle> © {`${new Date().getFullYear()}`} by LeeN.</FooterStyle>
  )
}

export default Copyright
