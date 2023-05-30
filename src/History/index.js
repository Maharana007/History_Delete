import './index.css'

const History = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history">
      <p className="time"> {timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" />
      <h1 className="title"> {title}</h1>
      <p className="url">{domainUrl} </p>
      <button className="button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default History
