import React, { useState } from 'react'
import imageProfile from '../images/image__profile.jpg'
import '../blocks/Main/Main.css'
import {api} from '../components/utils/api.js'


export default function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick}) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  

  console.log(api)
  return (
    <>
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={imageProfile}
              alt="Avatar" />
            <button className="profile__avatar-edit" onClick={onEditAvatarClick}></button>
            <div className="profile__overlay-avatar"></div>
          </div>
          <div className="profile__presentation">
            <div className="profile__name">
              <h1 className="profile__author">Jacques Cousteau</h1>
              <button className="btn btn-profile profile__author-button-edit" onClick={onEditProfileClick} id="btn_profile"></button>
            </div>
            <h2 className="profile__activit">Explorador</h2>
          </div>
        </div>
        <button className="btn bt-place profile__author-button-add-place" onClick={onAddPlaceClick} id="btn_place"></button>
      </section>
      <div className="container-card">

    <h1>Hola</h1>

      </div>
    </>
  )
}
