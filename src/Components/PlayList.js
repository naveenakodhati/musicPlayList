import {BsTrash} from 'react-icons/bs'
import './PlayList.css'

const PlayList = props => {
  const {data, onDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = data

  const onUpdateList = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-el">
      <div className="songs-cart">
        <img className="song-img" src={imageUrl} alt="track" />
        <div className="titles-div">
          <p className="song-title">{name}</p>
          <p className="song-title-2">{genre}</p>
        </div>
      </div>
      <div className="songs-cart">
        <p className="song-time">{duration}</p>
        <button
          testid="delete"
          onClick={onUpdateList}
          className="delete-btn"
          type="button"
        >
          <BsTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayList
