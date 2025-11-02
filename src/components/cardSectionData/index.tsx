import { Link } from 'react-router-dom';
import './card.scss'

export default function CardSectionData({title, link, src, alt} : any) {
  return (
    <Link to={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <div className="cs-card_overlay" />
        <div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </div>
      </>
    </Link>
  )
}