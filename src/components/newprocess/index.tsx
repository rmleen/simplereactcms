import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Container, Paper, Card, CardContent,Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import data from "../../data/header"
import './section.scss';

import SocialWidget from '../Widget/SocialWidget';
import SectionHeading from '../sectionHeading';
import CardSectionData from '../cardSectionData';


export default function NewProcess({ variant }:any) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <div id="process" className="container">
        <Box sx={{ m: 7.5 }} />

        <SectionHeading
          title="Working process"
          subtitle="Planning to Develop"
          variant="cs-style1 text-center"
        />
        <Box sx={{ m: 0.5 }} />
        
        <div className="row">
          <Grid container mt={2} mb={2} alignItems="start" rowSpacing={1} columnSpacing={1}>
              <Card component={Paper} elevation={1} sx={{ width: { md: 300, sm: 200, xl: 450 } }}>
                  <CardContent>
                  <Typography variant="h3" component="div" sx={{ color: 'text.secondary' }}>
                  Sketching
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.      
                  </Typography>
                  </CardContent>
              </Card>
              <Box sx={{ m: 0.5 }} />
              <Card component={Paper} elevation={1} sx={{ width: { md: 300, sm: 200, xl: 450 } }}>
                  <CardContent>
                  <Typography variant="h3" component="div" sx={{ color: 'text.secondary' }}>
                  Sketching
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.      
                  </Typography>
                  </CardContent>
              </Card>
              <Box sx={{ m: 0.5 }} />
              <Card component={Paper} elevation={1} sx={{ width: { md: 300, sm: 200, xl: 450 } }}>
                  <CardContent>
                  <Typography variant="h3" component="div" sx={{ color: 'text.secondary' }}>
                  Sketching
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.      
                  </Typography>
                  </CardContent>
              </Card>
              <Box sx={{ m: 0.5 }} />
          </Grid>
        </div>
        <Box sx={{ m: 7.5 }} />
      </div>
      <div className="cs-gradient_1">
        
        <div className="cs-height_150 cs-height_lg_80" ></div>

      </div>
    </>
  );
}
