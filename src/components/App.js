
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

import { useEffect, useState } from 'react';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);




  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  };


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (e) => {
    console.log(e.target)
  }

  
  return (
    <>
      <div className="root__container">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick} />

        <PopupWithForm name='profile' titulo='Edit Profile' form='form' button='Guardar' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__grupo-input">
            <input className="popup__input" type="text" name="name-user" id="popup__input-profile" placeholder="Nombre"
              minLength="2" maxLength="40" required value="Jacques Cousteau" />
            <span className="popup__input-error popup__input-profile-error"></span>
          </div>

          <div className="popup__grupo-input">
            <input className="popup__input" type="text" name="job-user" id="popup__input-about" placeholder="Acerca de mi"
              minLength="2" maxLength="200" required value="Explorador" />
            <span className="popup__input-error popup__input-about-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm name='place' titulo='Edit Place' form='form' button='Guardar' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__grupo-input">
            <input className="popup__input" type="text" name="name-place" id="popup__input-name-place" placeholder="Title"
              minLength="2" maxLength="30" required />
            <span className="popup__input-error popup__input-name-place-error"></span>
          </div>

          <div className="popup__grupo-input">
            <input className="popup__input" type="url" name="url-place" id="popup__input-url-place"
              placeholder="Enlace a la imagen" required />
            <span className="popup__input-error popup__input-url-place-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm name='avatar-edit' titulo='Cambiar foto de perfil' form='form-avatar' button='Guardar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup__grupo-input">
            <input className="popup__input" type="url" name="url-avatar" id="popup__input-url-avatar" placeholder="Avatar" required />
            <span className="popup__input-error popup__input-url-avatar-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm name='confirm' titulo='¿Estas Seguro?' button='Sí' form='form-confirm' onClose={closeAllPopups} />



        <div className="container-card">

          

        </div>


        <Footer />

      </div>
    </>
  );
}

export default App;
