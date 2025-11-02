import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import { Form, Spinner, Alert } from "reactstrap";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { Box, TextField, Divider, Skeleton, Card, CardMedia, CardHeader, CardActions, Typography, Button, Toolbar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getUser, getUserAuth } from "../../state/repo";
import { IUserAuth, IUserLogin } from "../../utils/interface";
import { RootState, AppDispatch } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, ChangeEvent } from "react";

import AuthContext from "../../store/userAuthContext";

import ContactInfoWidget from '../Widget/ContactInfoWidget';

const NavSide = () => {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState<boolean>(true);
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [loginfailure, setLoginFailure] = useState<boolean>(false);
  const [isuserauth, setIsUserAuth] = useState<boolean>(false);
  const [usercurrenttoken, setUserToken] = useState<string>("");
  const [userfirstname, setUserFirstName] = useState("");
  const [userimage, setUserImage] = useState<string>("");
  const [isgetauthdispatch, setisgetauthdispatch] = useState<boolean>(false);

  const authContext = useContext(AuthContext);

  const ErrorBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "center",
    justifyContent: 'center',
    height: '100vh',
    background: theme.palette.background.default,
  }));
  
  const ErrorHeading = styled(Typography)({
    fontSize: 64,
    fontWeight: 700,
    marginBottom: 20,
  });
  

  const dispatch: AppDispatch = useDispatch();
  const { userInfo: { isLoading, data: { name, login, location, avatar_url, url } },
   preferredTheme, userAuth } = useSelector((state: RootState) => state.repo)
  
  const handleClose = () => {
    setOpen(false);
    //dispatch(getUser(username));
  };

  const handleLoginButton = () => {
    setOpen(true);
  };
  
  const handleLoginSubmit = () => {
    let params: IUserLogin = {
      username :username,
      password : password
    };
    
    dispatch(getUserAuth(params)).then((resp) => {
      console.log('userAuthuserAuth',resp);
      setisgetauthdispatch(true);
      if(resp !== undefined && resp.payload !== undefined && resp.payload != null && resp.payload.hasOwnProperty('accessToken') && resp.payload.accessToken !== undefined && resp.payload.accessToken != null && resp.payload.accessToken != "" ){
        setIsUserAuth(true);
        setUserFirstName(resp.payload.firstName);
        setUserImage(resp.payload["image"]);
        setUserToken(resp.payload.accessToken);
        authContext.SetLogin(resp.payload);
        console.log('userfirstname',resp.payload.firstName);
        console.log('userfirstname',userfirstname);
        console.log('usercurrenttoken',usercurrenttoken);
        console.log('userimage',isuserauth);
      }
      
    });
  };
  useEffect(() => {
    if (isgetauthdispatch) {
      console.log('isuserauth',isuserauth);
      console.log('usercurrenttoken',usercurrenttoken);
      console.log('userfirstname',userfirstname);
      if (!isuserauth || usercurrenttoken === undefined || usercurrenttoken == ""){
        setLoginFailure(true);
        setOpen(true);
        setIsUserAuth(false);
        setUserFirstName("");
        setUserImage("");
        setUserToken("");
      } else{
        setOpen(false);
        setLoginFailure(false);
      }
      setisgetauthdispatch(false);
    }
  }, [isgetauthdispatch]);

  const handleLogoutButton = () => {
    setOpen(false);
    setIsUserAuth(false);
    setLoginFailure(true);
    setUserFirstName("");
    setUserImage("");
    setUserToken("")
    dispatch(getUser(""));
  }; 
  
  const handleUserChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setPassword(e.target.value);
  };

  //const {  register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      <div className="cs-side_header_in">
          <div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="">
            { isuserauth && userimage != "" 
            ? <img style={{ borderRadius: "50%" }} src={userimage} height={40} />
            : <Skeleton variant="text" height={60} width={100} />
            }
            
          </Link>
          <div className="cs-side_header_box">
          {!isuserauth || usercurrenttoken == "" ?
          <Form className="is-alter">
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Username
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                required fullWidth autoFocus margin="dense"
                id="username"
                label="Username"
                type="text"
                onChange={handleUserChange}
                variant="standard"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                fullWidth autoFocus margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handlePassChange}
                variant="standard"
                />
              </div>
            </div>
            <div className="form-group">
            { username && loginfailure ?
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Username and Password combination failed           
            </Typography>:
            <Divider></Divider>
            }
            </div>
            <div className="form-group">
            <Button color="inherit" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outlined" color="warning" onClick={handleLoginSubmit}>
              Submit
            </Button>
            </div>
          </Form>
          : 
          <>
          <Typography color="text.primary" noWrap>
            Hello {userfirstname} 
          </Typography>
          <Box mt={5}>
          <ul className='cs-side_menu_widget'>
          
          <li key={window.crypto.randomUUID()}>
            <ArrowRightIcon />
            <Link to="/userprofile/edit" >Edit Profile</Link>
          </li>
          <li key={window.crypto.randomUUID()}>
            <ArrowRightIcon />
            <Link to="/posts/create" >Create Post</Link>
          </li>
          <li key={window.crypto.randomUUID()}>
            <ArrowRightIcon />
            <Link to="/" onClick={()=>handleLogoutButton()} >Logout</Link>
          </li>
          </ul>
          </Box>
          </>
          }
          </div>
          <div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </div>

          <div className="cs-side_header_box">
            <SocialWidget />
          </div>
        </div>
    </>
  );
}



export default  NavSide;