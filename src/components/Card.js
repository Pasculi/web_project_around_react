import React, { useContext } from 'react';
import trash from '../images/vector__eliminar.png';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ index, card, onCardClick, onCardLike }) => {

  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__place-button--delete ${isOwn ? 'card__place-button--delete' : 'card__place-button--delete-hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__place-button--like ${isLiked ? 'card__place-button--like-active' : ''}`;

  const handleLikeClick = () => {
    onCardLike(card);
  }

  return (
    <>
      <div key={index} className="card">
        <div className="card__place">
          <button className="card__place-button--delete">

            <img className={cardDeleteButtonClassName} src={trash} alt="Eliminar" />
          </button>
          <div className="card__place-container-image">
            <img className="card__place-image-place"
              src={card.link}
              alt={card.name} onClick={onCardClick} />
          </div>
          <div className="card__place-footer">
            <h2 className="card__place-name">{card.name}</h2>
            <div className="card__place-like-section">
              <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
              <span className="card__place-like-counter">{card.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
