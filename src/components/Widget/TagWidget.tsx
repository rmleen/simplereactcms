import { Link } from 'react-router-dom'


export default function TagWidget({title, data}:any) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <div className="tagcloud">
        {data?.map((tag :any, index:any)=> (
          <Link to={tag.url} className="tag-cloud-link" key={index}>{tag.title}</Link>
        ))}
      </div>
    </>
  )
}
