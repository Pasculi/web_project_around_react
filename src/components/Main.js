import React, { useContext } from 'react'
import '../blocks/Main/Main.css'
import { CurrentUserContext } from "../contexts/CurrentUserContext";


export default function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick}) {

  const { currentUser } = useContext(CurrentUserContext);


  
  return (
    <>
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={currentUser?.avatar}
              alt="Avatar" />
            <button className="profile__avatar-edit" onClick={onEditAvatarClick}></button>
            <div className="profile__overlay-avatar"></div>
          </div>
          <div className="profile__presentation">
            <div className="profile__name">
              <h1 className="profile__author">{currentUser?.name}</h1>
              <button className="btn btn-profile profile__author-button-edit" onClick={onEditProfileClick} id="btn_profile"></button>
            </div>
            <h2 className="profile__activit">{currentUser?.about}</h2>
          </div>
        </div>
        <button className="btn bt-place profile__author-button-add-place" onClick={onAddPlaceClick} id="btn_place"></button>
      </section>
      
    </>
  )
}
