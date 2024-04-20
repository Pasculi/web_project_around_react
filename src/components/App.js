
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagenPopup'
import { api } from '../components/utils/api';
import { useEffect, useState } from 'react';
import Card from './Card';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cards, setCards] = useState([]);
  



  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
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

  const handleCardClick = () => {
    console.log('Click Card')
    setSelectedCard(true)
  }
  useEffect(() => {

    api.getInitialCards()
      .then((res) => {
        setCards(res);

      })
  }, [])

  
  return (
    <>
      <div className="root__container">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick} />
      

        <div className="container-card">
          {
            cards?.map((card, index) => {
              console.log(card)
              return (
                <Card key={index} card={card} onCardClick={handleCardClick} />
              )
            })
          }
          {<ImagePopup card={selectedCard} onClose={closeAllPopups} />}
        </div>

        <PopupWithForm name='profile' titulo='Edit Profile' form='form' button='Guardar' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__grupo-input">
            <input className="popup__input" type="text" name="name-user" id="popup__input-profile" minLength="2" maxLength="40" required placeholder="Jacques Cousteau" />
            <span className="popup__input-error popup__input-profile-error"></span>
          </div>

          <div className="popup__grupo-input">
            <input className="popup__input" type="text" name="job-user" id="popup__input-about" minLength="2" maxLength="200" required placeholder="Explorador" />
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



        <Footer />

      </div>
    </>
  );
}

export default App;
