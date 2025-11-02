import React from 'react'

export default function TextWidget({logoSrc, logoAlt, text} :any) {
  return (
    <div className="cs-text_widget">
      <img src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </div>
  )
}
