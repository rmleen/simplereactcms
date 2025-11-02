import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Container, Paper, Card, CardContent,Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import data from "../../data/header"
//import './header.scss';

import SocialWidget from '../Widget/SocialWidget';
import SectionHeading from '../sectionHeading';
import CardSectionData from '../cardSectionData';
//import Card from './Card';


export default function NewServices({ variant }:any) {
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
      <div className="cs-gradient_1">
      <Box sx={{ m: 7.5 }} />
      <div id="service" >
        <div className="container row">
          <Grid container spacing={3} >

            <Grid container size={{ xs: 12, md: 4 }}>
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <div className="cs-height_90 cs-height_lg_45" ></div>
            </Grid>
            <Grid container size={{ xs: 12, md: 8 }}>
              
              <Box sx={{width: '100%'}}>
              <Grid container size={12}>
              <Grid container mt={2} mb={2} alignItems="start" rowSpacing={4} size={{ xs: 12, md: 6 }}>
                <div className="col-lg-12 col-sm-12">
                  <CardSectionData
                    title="Planning"
                    link="/service"
                    src="https://dummyjson.com/image/180"
                    alt="Service"
                  />
                  <div className="cs-height_0 cs-height_lg_30" ></div>
                </div>
              </Grid>
              <Grid container mt={2} mb={2} alignItems="start" rowSpacing={4} size={{ xs: 12, md: 6 }}>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-3 col-sm-6">
                  <CardSectionData
                    title="Development"
                    link="/service"
                    src="https://dummyjson.com/image/180"
                    alt="Service"
                  />
                  <div className="cs-height_0 cs-height_lg_30" ></div>
                </div>
              </Grid>
              </Grid>
              <Grid container size={12}>
              <Grid container mt={1} mb={1} rowSpacing={2} >
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile"></div>
                <div className="col-lg-12 col-sm-12">
                  <CardSectionData
                    title="Design"
                    link="/service"
                    src="https://dummyjson.com/image/180"
                    alt="Service"
                  />
                  <div className="cs-height_0 cs-height_lg_30" ></div>
                </div>
              </Grid>
              </Grid>
              <Grid container size={12}>
              <Grid container mt={2} mb={2} alignItems="start" rowSpacing={4} size={{ xs: 12, md: 6 }}>  
                <div className="col-lg-12 col-sm-12">
                  <CardSectionData
                    title="Analysis"
                    link="/service"
                    src="https://dummyjson.com/image/180"
                    alt="Service"
                  />
                  <div className="cs-height_0 cs-height_lg_30" ></div>
                </div>
              </Grid>
              <Grid container mt={2} mb={2} alignItems="start" rowSpacing={4}  size={{ xs: 12, md: 6 }}>
                <div className="col-lg-3 col-sm-6">
                  <CardSectionData
                    title="Technology"
                    link="/service"
                    src="https://dummyjson.com/image/180"
                    alt="Service"
                  />
                  <div className="cs-height_0 cs-height_lg_30" ></div>
                </div>
              </Grid>
              </Grid>

              </Box>

            </Grid>
          </Grid>
        </div>
      </div>
      </div>
    </>
  );
}
