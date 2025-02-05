import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Area = ({ icon, title, text }) => {
  return (
    <article className="area">
      <span className="area-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h4>{title}</h4>
      <p className="area-text">{text}</p>
    </article>
  )
}

export default Area
