import React, { useEffect, useState } from 'react'
import trash from '../images/vector__eliminar.png'
import '../blocks/Main/Main.css'
import {api} from '../components/utils/api.js'


export default function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick}) {
  
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
  },[])

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

    {useEffect(() => {
    const section = document.querySelector('.container-card')
    api.getInitialCards()
      .then((res) => {
        setCards(res);

        console.log(setCards)
        section.append(


          /* lists?.map((card, index) => {
            {
              <div key={index} class="card">
                <div class="card__place">
                  <button class="card__place-button--delete">
                    <img class="card__place-imagen-trash" src={trash} alt="Eliminar" />
                  </button>
                  <div class="card__place-container-image">
                    <img class="card__place-image-place"
                      src={card.link}
                      alt={card.name} />
                  </div>
                  <div class="card__place-footer">
                    <h2 class="card__place-name">{card.name}</h2>
                    <div class="card__place-like-section">
                      <button class="card__place-button--like"></button>
                      <span class="card__place-like-counter">{card.likes.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            }
            console.log(index)
            console.log(card.name)
            console.log(card.link)
            console.log(card.likes.length)
          }) */
        )
      })
  }, [])
}

      </div>
    </>
  )
}
