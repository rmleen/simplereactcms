import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Container, Paper, Card, CardContent,Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"

import { styled } from '@mui/material/styles';

export default function PageHeading( {imageurl, title} :any ) {
  var path = process.env.PUBLIC_URL;
  var defaultimage = path + "/images/header01.jpg";

  const thisimage = defaultimage
  const HeadBackground = styled('div')({
    position: "relative",
    width: "100%",
    minHeight: "150px",
    maxHeight: "300px",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center right",
    backgroundImage: `url(${thisimage})`

  });

  return (
    <>
      <div>
      <Box sx={{ position: "relative" }}>
        <HeadBackground sx={{alignItems:'center'}}>
        <Typography variant="h2" gutterBottom sx={{textAlign:'center', paddingTop:'95px'}}>
          {title}
          </Typography>
        </HeadBackground>
      </Box>
      </div>
    </>
  );
}
