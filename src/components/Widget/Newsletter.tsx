import React from 'react'
//import Div from '../Div'

export default function Newsletter({title, subtitle, placeholder}:any) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form">
          <input type="email" className="cs-newsletter_input" placeholder={placeholder} />
          <button className="cs-newsletter_btn"><span>Send</span></button>
        </form>
        <div className="cs-newsletter_text">{subtitle}</div>
      </div>
    </>
  )
}
