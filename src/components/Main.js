import React, { useEffect, useState } from 'react'
import trash from '../images/vector__eliminar.png'
import '../blocks/Main/Main.css'
import {api} from '../components/utils/api.js'


export default function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick }) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([])


  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => {
        console.war("Error: " + err);
      });
  }, []);
  useEffect(() => {

    api.getInitialCards()
      .then((res) => {
        setCards(res);

      })
  }, [])

  return (
    <>
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={userAvatar}
              alt="Avatar" />
            <button className="profile__avatar-edit" onClick={onEditAvatarClick}></button>
            <div className="profile__overlay-avatar"></div>
          </div>
          <div className="profile__presentation">
            <div className="profile__name">
              <h1 className="profile__author">{userName}</h1>
              <button className="btn btn-profile profile__author-button-edit" onClick={onEditProfileClick} id="btn_profile"></button>
            </div>
            <h2 className="profile__activit">{userDescription}</h2>
          </div>
        </div>
        <button className="btn bt-place profile__author-button-add-place" onClick={onAddPlaceClick} id="btn_place"></button>
      </section>
      <div className="container-card">
        {
          cards?.map((card, index) => {
            return (
              <div key={ index} className="card">
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
                    <h2 className="card__place-name">{ card.name}</h2>
                    <div className="card__place-like-section">
                      <button className="card__place-button--like"></button>
                      <span className="card__place-like-counter">{card.likes.length }</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}
