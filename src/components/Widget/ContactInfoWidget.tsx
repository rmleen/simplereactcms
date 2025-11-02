import { AddCall } from "@mui/icons-material"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
//import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title} :any) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><MailOutlineIcon /></span>:''}
          contact@mycontact.com
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><MyLocationIcon /></span>:''}
          United Kingdom
        </li>
      </ul>
    </>
  )
}
