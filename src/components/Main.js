import React from 'react'
import imageProfile from '../images/image__profile.jpg'
import '../blocks/Main/Main.css'

export default function Main() {

  const handleEditAvatarClick = () => {
    const editAvatar = document.querySelector('.profile__avatar-edit');
    editAvatar.classList.add('popup-avatar-edit--show')
  }
  const handleEditProfileClick = () => { 
    const editProfile = document.querySelector('.popup-profile');
    editProfile.classList.add('popup--show')
  }

  const handleAddPlaceClick = () => {
    const editPlace = document.querySelector('.popup-place');
    editPlace.classList.add('popup--show')
  }
  
  return (
    <>
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={imageProfile}
              alt="Avatar" />
            <button className="profile__avatar-edit" onClick={handleEditAvatarClick}></button>
            <div className="profile__overlay-avatar"></div>
          </div>
          <div className="profile__presentation">
            <div className="profile__name">
              <h1 className="profile__author">Jacques Cousteau</h1>
              <button className="btn btn-profile profile__author-button-edit" onClick={handleEditProfileClick} id="btn_profile"></button>
            </div>
            <h2 className="profile__activit">Explorador</h2>
          </div>
        </div>
        <button className="btn bt-place profile__author-button-add-place" onClick={handleAddPlaceClick} id="btn_place"></button>
      </section>
    </>
  )
}
