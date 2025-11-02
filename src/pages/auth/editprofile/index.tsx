import { Pagination } from "../../../components"
import { AppDispatch, RootState } from "../../../state"
import { addNewPost, getLatestPost } from "../../../state/repo";
import { useCallback, useEffect, useState, useContext, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData, IPost, IUserDetail } from "../../../utils/interface";
import { Box, Paper, TextField, Divider, Skeleton, Typography, Button, Toolbar, Grid } from "@mui/material"
import { Form, Spinner, Alert } from "reactstrap";
import CardPostData from "../../../components/cardPostData";
import AuthContext from "../../../store/userAuthContext";

const PostCreate = () => {
  const { userInfo: { data: { login, followers } }, posts, postDetail, userAuth  } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();
  const authContext = useContext(AuthContext);

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 10,
  });

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [buttondisable,  setButtondisable] = useState<boolean>(false);
  const [buttonname,  setButtonname] = useState<string>("Submit");

  const handleFirstnameChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setFirstname(e.target.value);
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setImage(e.target.value);
  };
  const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setLastname(e.target.value);
  };
  const handleSubmit = () => {
    let params:IUserDetail = {
      data: {
        firstName: firstname,
        lastName: lastname,
        image: image,
        email: "",
        role: "",
        id: 0
        
      },
      isLogin: true,
      isLoading: false
    };
    console.log('para',params)    
    /*
    dispatch(addNewPost(params)).then((resp) => {
      console.log('addNewPost',resp);
      
      if(resp !== undefined && resp.payload !== undefined && resp.payload != null && resp.payload.hasOwnProperty('title') && resp.payload.title !== undefined && resp.payload.title != null && resp.payload.title != "" ){
        setButtondisable(true);
        setButtonname("Submitted Successfully");
      }
      
    });
    */
  };

  const fetchData = useCallback(() => {
    dispatch(getLatestPost(state));
    console.log('getLatestPost',posts,posts.data.limit)
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <Box sx={{ m: 11.5, align:'center' }} />
      <div>
      <h2>Edit Profile</h2>
      {authContext.isLoggedIn ?
      <>
        <Grid component={Paper} >
        <Box component="section" sx={{ width: '90%', p: 2, border: '1px dashed grey', alignItems:'center' }}>
          <Form className="is-alter">
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  First Name
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                required fullWidth autoFocus margin="dense"
                id="Firstname"
                label="Firstname"
                type="text"
                onChange={handleFirstnameChange}
                variant="standard"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Last Name
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                fullWidth autoFocus margin="dense"
                id="lastname"
                label="lastname"
                type="text"
                onChange={handleLastnameChange}
                variant="standard"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-02">
                Image
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                id="Image"
                placeholder="Image"
                label=""
                type="text"
                onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="form-group">
          
            <Divider></Divider>
            </div>
            <div className="form-group">
            
            <Button variant="outlined" color="warning" disabled={buttondisable} onClick={handleSubmit}>
              {buttonname}
            </Button>
            </div>
          </Form>
        </Box>  
        </Grid>
      </>
      :
      <>
      </>
      }
      
    </div>
    </>
  )
}

export default PostCreate
