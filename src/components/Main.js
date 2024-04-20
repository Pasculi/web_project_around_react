import React, { useEffect, useState } from 'react'
import '../blocks/Main/Main.css'
import { api } from '../components/utils/api.js'


export default function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick}) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
 
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
      
    </>
  )
}
