import { Pagination } from "../../components"
import { AppDispatch, RootState } from "../../state"
import { getLatestPost } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
import { Box, Card, Container, CardMedia, Grid, Paper, CardHeader, CardContent, Typography } from "@mui/material"

import PageHeading from "../../components/pageHeading";
import PageBodyContent from "../../components/pageBodyContent";

const Service = () => {
  const { userInfo, posts } = useSelector((state: RootState) => state.repo);

  return (
    <>
    <div>
    <PageHeading  title={'Service'}>

    </PageHeading>
    </div>
      <Box sx={{ m: 11.5 }} >
        <Grid container spacing={1} sx={{flexGrow:1}}>
        <PageBodyContent title={'Plan'} sx={{flexGrow:1}}>
        <CardMedia  component="img" height="215" image={"https://dummyjson.com/image/800x300"} />    
          <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            
        </PageBodyContent>
        </Grid>

        <Grid container spacing={1} sx={{flexGrow:1}}>
        <PageBodyContent title={'Develop'} sx={{flexGrow:1}}>
        <CardMedia  component="img" height="215" image={"https://dummyjson.com/image/800x300"} />    
          <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            
        </PageBodyContent>
        </Grid>

        <Grid container spacing={1} sx={{flexGrow:1}}>
        <PageBodyContent title={'Technology'} sx={{flexGrow:1}}>
        <CardMedia  component="img" height="215" image={"https://dummyjson.com/image/800x300"} />    
          <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            <p>
            The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before. That was strange since it was obvious the flashing light had been there for years. Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.
            </p>
            
        </PageBodyContent>
        </Grid>
        
      </Box>
    </>
  )
}

export default Service
