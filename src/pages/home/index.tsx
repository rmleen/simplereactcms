import { styled } from '@mui/material/styles';
import { Avatar, Box, Button, Link as MuiLink, Grid, Typography, useMediaQuery, Stack, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

const VideoBackground = styled('div')({
  position: "relative",
  width: "100%",
  minHeight: "600px",
  '& video': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});


const Home = () => {
  var path = process.env.PUBLIC_URL;
  var video = path + "/videos/background.mp4";

  const { userInfo: { isLoading, data: { name, login, avatar_url, bio, hireable, blog } } } = useSelector((state: RootState) => state.repo)
  
  return (
    <Box sx={{ position: "relative" }}>
      <VideoBackground >
        <video controls={false} autoPlay={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
      </VideoBackground>
    </Box>
  )
}

export default Home
