import { Pagination } from "../../components"
import { AppDispatch, RootState } from "../../state"
import { getLatestPost } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
import { Box, Card, Grid, Paper, CardHeader, CardContent, Typography } from "@mui/material"

import PageHeading from "../../components/pageHeading";
import PageBodyContent from "../../components/pageBodyContent";

const About = () => {
  const { userInfo: { data: { login, followers } }, posts } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 10,
  });

  const fetchData = useCallback(() => {
    dispatch(getLatestPost(state));
    console.log('getLatestPost',posts,posts.data.limit)
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
    <div>
    <PageHeading  title={'About Us'}>

    </PageHeading>
    </div>
      <Box sx={{ m: 11.5 }} >
        <>
        <PageBodyContent title={'Our Mission'}>
          What do we do? 
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            
        </PageBodyContent>
        </>

        <>
        <PageBodyContent title={'Our Vision'}>
          Where are we going?
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            
        </PageBodyContent>
        </>
        
      </Box>
    </>
  )
}

export default About
