import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import './header.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
//import parse from 'html-react-parser';

export default function SectionHeading({title, subtitle, btnLink, btnText, variant, children} :any) {
  return (
    <div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h3 className="cs-section_subtitle">{(subtitle)}</h3>
      <h2 className="cs-section_title">{(title)}</h2>
      {children}
      {btnText && (
        <>
          <Box sx={{ m: 0.5 }} />
          <div className='cs-height_45 cs-height_lg_20' ></div>
          <Link
            to={btnLink}
            className='cs-text_btn'
          >
          <>
          <span>{btnText}</span>
          <TrendingFlatIcon />
          </>
          </Link>

          
        </>
      )}
    </div>
  )
}
