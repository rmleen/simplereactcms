import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Container, Paper, Card, CardContent,Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"


export default function PageBodyContent( {title, width, children} :any ) {
  const thiswidth = width != null ? width : '64%' 
  return (
    <>
      <div>
        <Grid container mt={1} mb={1}>
        <Card component={Paper} elevation={5} sx={{ width: { md: thiswidth, sm: "100%" }, height: "auto" }}>
          <CardContent >
          <Typography variant="h3" color="text.secondary" mt={1} mb={2}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {children}
          </Typography>
          </CardContent>
        </Card>
        </Grid>
      </div>
    </>
  );
}
