import React, { useContext } from 'react';
import trash from '../images/vector__eliminar.png';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ index, card, onCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  
  return (
    <>
      <div key={index} className="card">
        <div className="card__place">
          <button className="card__place-button--delete">
            <img className="card__place-imagen-trash" src={trash} alt="Eliminar" />
          </button>
          <div className="card__place-container-image">
            <img className="card__place-image-place"
              src={card.link}
              alt={card.name} onClick={onCardClick} />
          </div>
          <div className="card__place-footer">
            <h2 className="card__place-name">{card.name}</h2>
            <div className="card__place-like-section">
              <button className="card__place-button--like"></button>
              <span className="card__place-like-counter">{card.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
