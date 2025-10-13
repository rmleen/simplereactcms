import { FC, ReactElement } from "react"
import { Box, Stack, Grid, Link as MuiLink, Typography, Avatar, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import Copyright from "./copyright";
import Banner from "./banner";
import Categorylink from "./categorylink";

interface IData {
  data: {
    name: string;
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
  }
}

const FooterLogo: FC<IData> = ({ data }) => {
  const { name, login, avatar_url, following, followers } = data;
  return (
    <Container>
      <Grid container direction="row">
        
      </Grid >
    </Container>
  )
}

const Footer: FC = (): ReactElement => {
  const { userInfo: { data: { name, bio, login, avatar_url, followers, following }, isLoading
  } } = useSelector((state: RootState) => state.repo);

  return (
    <Box>
      
      <FooterLogo data={{ name, login, avatar_url, following, followers }} />
      <Categorylink />
      <Copyright />
    </Box >
  );
};

export default Footer;

