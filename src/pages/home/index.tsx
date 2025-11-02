import { styled } from '@mui/material/styles';
import { Avatar, Box, Button, Link as MuiLink, Grid, Typography, useMediaQuery, Stack, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import NewServices  from '../../components/newservices';
import NewProcess  from '../../components/newprocess';
import MovingText  from '../../components/movingText';

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
    <div>
    <Box sx={{ position: "relative" }}>
      <VideoBackground >
        <video controls={false} autoPlay={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
      </VideoBackground>
      
    </Box>
    <NewProcess> </NewProcess>
    <NewServices> </NewServices>
    <MovingText text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor" />
    </div>
    
    
    
  )
}

export default Home
