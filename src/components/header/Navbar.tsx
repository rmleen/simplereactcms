import { Link as MuiLink, Skeleton, AppBar, Grid, Box, Toolbar, Button, Typography } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Divider,
  DialogContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../state/repo"
import { useCallback, useState,useEffect, ChangeEvent } from "react";
import { RootState, AppDispatch } from "../../state";
import GetUserName from "./UserDialog"
import { getUser, getUserAuth } from "../../state/repo";
import { IUserAuth, IUserLogin } from "../../utils/interface";


const Navbar = () => {
  const [themeMode, setMode] = useState("dark");
  const [open, setOpen] = useState<boolean>(true);
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [loginfailure, setLoginFailure] = useState<boolean>(false);
  const [isuserauth, setIsUserAuth] = useState<boolean>(false);
  const [usercurrenttoken, setUserToken] = useState<string>("");
  const [userfirstname, setUserFirstName] = useState("");
  const [userimage, setUserImage] = useState<string>("");
  const [isgetauthdispatch, setisgetauthdispatch] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const { userInfo: { isLoading, data: { name, login, location, avatar_url, url } },
   preferredTheme, userAuth } = useSelector((state: RootState) => state.repo)
  
  const handleClose = () => {
    setOpen(false);
    //dispatch(getUser(username));
  };

  const handleThemeDispatch = useCallback(() => {
    setMode(prev => prev === "dark" ? "light" : "dark");
    dispatch(setTheme(themeMode));
  }, [dispatch, themeMode]);

  const handleLoginButton = () => {
    setOpen(true);
  };
  
  const handleLoginSubmit = () => {
    let params: IUserLogin = {
      username :username,
      password : password
    };
    
    dispatch(getUserAuth(params)).then((resp) => {
      console.log('userAuthuserAuth',resp.payload);
      setisgetauthdispatch(true);
      if(resp.payload != null && 'accessToken' in resp.payload && resp.payload.accessToken !== undefined && resp.payload.accessToken != null && resp.payload.accessToken != "" ){
        setIsUserAuth(true);
        setUserFirstName(resp.payload.firstName);
        setUserImage(resp.payload["image"]);
        setUserToken(resp.payload.accessToken);
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


  return (
    <>
      <Dialog onClose={handleClose} open={open} >
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          Please enter your username
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="username"
          label="Username"
          type="text"
          onChange={handleUserChange}
          
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          onChange={handlePassChange}
          
          fullWidth
          variant="standard"
        />
        { loginfailure ?
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Username and Password combination failed           
        </Typography>:
        <Divider></Divider>
        }
        
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outlined" color="warning" onClick={handleLoginSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>

      <Box>
      <AppBar position="static">
        <Toolbar >
          <Grid container columnSpacing={2}>
            <Grid>
              <MuiLink component={RouterLink} to='' >
                {isuserauth && userimage != "" ? 
                  <img style={{ borderRadius: "50%" }} src={userimage} height={40} />
                  :
                  <Skeleton variant="circular" height={40} width={40} />
                }
              </MuiLink>
            </Grid>
          </Grid>
          {isuserauth && userfirstname != "" ?
          <>
          <Typography color="text.primary" noWrap>
            Welcome {userfirstname} 
          </Typography>
          </> :
          <Skeleton variant="text" height={60} width={100} />
          }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          {isuserauth && usercurrenttoken != "" ?
            <Button color="inherit" onClick={handleLogoutButton}>Logout</Button>
            :
            <Button variant="outlined" color="inherit" onClick={handleLoginButton}>Login</Button>
          }
        </Toolbar>
      </AppBar>
      </Box>
    </>
  );
}

export default Navbar; 
