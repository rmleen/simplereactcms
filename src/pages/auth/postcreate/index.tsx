import { Pagination } from "../../../components"
import { AppDispatch, RootState } from "../../../state"
import { addNewPost, getLatestPost } from "../../../state/repo";
import { useCallback, useEffect, useState, useContext, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData, IPost } from "../../../utils/interface";
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

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [buttondisable,  setButtondisable] = useState<boolean>(false);
  const [buttonname,  setButtonname] = useState<string>("Submit");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setTitle(e.target.value);
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setImage(e.target.value);
  };
  const handleContentChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    let params:IPost = {
      data: {
        posts:{
          id:null,
          title: title,
          body: content,
          image: image,
          views: null, 
          userid: userAuth.data.id
        },
        limit: 1
      },
      isLoading: false
    };
    console.log('para',params)    
    dispatch(addNewPost(params)).then((resp) => {
      console.log('addNewPost',resp);
      
      if(resp !== undefined && resp.payload !== undefined && resp.payload != null && resp.payload.hasOwnProperty('title') && resp.payload.title !== undefined && resp.payload.title != null && resp.payload.title != "" ){
        setButtondisable(true);
        setButtonname("Submitted Successfully");
      }
      
    });

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
      <h2>Create Post</h2>
      {authContext.isLoggedIn ?
      <>
        <Grid component={Paper} >
        <Box component="section" sx={{ width: '90%', p: 2, border: '1px dashed grey', alignItems:'center' }}>
          <Form className="is-alter">
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Post Title
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                required fullWidth autoFocus margin="dense"
                id="title"
                label="Title"
                type="text"
                onChange={handleTitleChange}
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
                fullWidth autoFocus margin="dense"
                id="image"
                label="Image"
                type="text"
                onChange={handleImageChange}
                variant="standard"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-02">
                Post Content
                </label>
              </div>
              <div className="form-control-wrap">
              <TextField
                id="body"
                placeholder="Post Content"
                label="Post Content"
                rows={6}
                onChange={handleContentChange}
                sx={{width:'100%'}}
                multiline
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
