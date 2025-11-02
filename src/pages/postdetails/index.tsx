import { Pagination } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../state"
import { getSinglePost } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
import CardPostData from "../../components/cardPostData";
import { Box, Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import { Container } from "reactstrap";
import PageBodyContent from "../../components/pageBodyContent";

const PostDetails = () => {
  const { userInfo: { data: { login, followers } }, posts, postDetail } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 10,
  });

  const fetchData = useCallback((postId : string) => {
    dispatch(getSinglePost(postId));
    console.log('getSinglePost',posts,posts.data.limit)
  }, [dispatch, state])

  const navigate = useNavigate();
  const params = useParams();
  const postId = params.id;

  useEffect(() => {
    if (postId) {
    fetchData(postId);
    }
  }, [fetchData,postId])
  console.log('postdata',postDetail.data.posts)
  const backimg = postDetail.data.posts.image !== undefined && postDetail.data.posts.image !== null && posts.data.posts.image != ""  ? 
  postDetail.data.posts.image : "https://dummyjson.com/image/1280x400";

  console.log('backimg',backimg)
  return (
    <>
      <Box sx={{ m: 11.5 }} />
      <Box sx={{  backgroundImage:`url(${backimg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 400 }}>

      </Box>
      <Box sx={{ fontSize: 'h3.fontSize', m: 1 }}>{postDetail.data.posts.title}</Box>
      <></><Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Views:{postDetail.data.posts.views}
      </Typography>
      <div>
        <Container>
          <PageBodyContent width='81%'>
          <p>{postDetail.data.posts.body}</p>
          </PageBodyContent>
        

        </Container>
      </div>

    </>
  )
}

export default PostDetails
