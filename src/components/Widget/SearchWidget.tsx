import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react'

export default function SearchWidget({title}:any) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <form className="cs-sidebar_search">
        <input type="text" placeholder="Search..." />
        <button className="cs-sidebar_search_btn">
          <SearchRoundedIcon />                   
        </button>
      </form>
    </>
  )
}
