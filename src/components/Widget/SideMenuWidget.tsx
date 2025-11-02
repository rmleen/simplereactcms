import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Link } from 'react-router-dom'

export default function SideMenuWidget({title, data}:any) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <ul className='cs-side_menu_widget'>
        {data?.map((item:any, index:any)=> (
          <li key={index}>
            <KeyboardDoubleArrowRightRoundedIcon />
            <Link to={item.url} key={index}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
