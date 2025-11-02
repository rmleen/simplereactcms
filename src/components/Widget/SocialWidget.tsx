import React from 'react'
import { Link } from 'react-router-dom'

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function SocialWidget() {
  return (
    <div className="cs-social_btns cs-style1">
      <Link to='/' className="cs-center">
        <FacebookIcon />
      </Link>
      <Link to='/' className="cs-center">
        <LinkedInIcon />               
      </Link>
      <Link to='/' className="cs-center">
        <YouTubeIcon />              
      </Link>
      <Link to='/' className="cs-center">
        <InstagramIcon />
      </Link>
    </div>
  )
}
