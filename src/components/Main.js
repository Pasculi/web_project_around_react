import React from 'react'
import imageProfile from '../images/image__profile.jpg'
import { buttonEditProfile,overlayAvatar, avatarSection, popupEditAvatar, closeFormAvatar } from '../utils/utils.js'
import '../blocks/Main/Main.css'

console.log(avatarSection)
console.log(popupEditAvatar)
console.log(closeFormAvatar)

export default function Main() {

  const handleEditAvatarClick = () => {
    const editAvatar = document.querySelector('.profile__avatar');
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

  function addOverlayAvatar() {
    buttonEditProfile.classList.add('profile__avatar-edit--show');
    overlayAvatar.classList.add('profile__overlay-avatar--show')
  }
  function removeOverlayAvatar() {
    buttonEditProfile.classList.remove('profile__avatar-edit--show')
    overlayAvatar.classList.remove('profile__overlay-avatar--show')
  }
  
  avatarSection.addEventListener('mouseover', addOverlayAvatar)
  
avatarSection.addEventListener('mouseout', removeOverlayAvatar)
  
  
  buttonEditProfile.addEventListener('click', () => {
    popupEditAvatar.classList.add('popup-avatar-edit--show');
  })
  closeFormAvatar.addEventListener('click', () => {
    popupEditAvatar.classList.remove('popup-avatar-edit--show');
  })
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
