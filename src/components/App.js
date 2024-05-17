
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagenPopup'
import { api } from '../components/utils/api';
import { useEffect, useState } from 'react';
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';



function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState({});
  const [currentUser, setCurrentUser] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    setCardToDelete(card);
  }
  useEffect(() => {
    api.getUserInfo()
      .then(data => setCurrentUser(data))
  }, [])

  const handleUpdateUser = ({ name, about }) => {
    api.updateUser({ name, about })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.warn(err)
      })
  };

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

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.addCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    });
  };

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
  }, [])

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar(avatar);
    console.log(avatar)
    setCurrentUser({ ...currentUser, avatar: avatar });
    closeAllPopups();
  }


  return (
    <>
      <div className="root__container">
        <CurrentUserContext.Provider value={{ currentUser }}>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />


          <div className="container-card">
            {
              cards?.map((card, index) => {
                return (
                  <Card
                    key={index}
                    card={card}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete} />
                )
              })
            }
            {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} />}
          </div>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <PopupWithForm
            name='place'
            titulo='Editar Lugar'
            form='form'
            button='Guardar'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <div className="popup__grupo-input">
              <input
                className="popup__input"
                type="text" name="name-place"
                id="popup__input-name-place"
                placeholder="Title"
                minLength="2"
                maxLength="30"
                required />
              <span className="popup__input-error popup__input-name-place-error"></span>
            </div>

            <div className="popup__grupo-input">
              <input
                className="popup__input"
                type="url"
                name="url-place"
                id="popup__input-url-place"
                placeholder="Enlace a la imagen"
                required />
              <span className="popup__input-error popup__input-url-place-error"></span>
            </div>
          </PopupWithForm>



          <PopupWithForm
            name='confirm'
            titulo='¿Estas Seguro?'
            button='Sí'
            form='form-confirm'
            onClose={closeAllPopups}

          />
          <Footer />
        </CurrentUserContext.Provider>

      </div>
    </>
  );
}

export default App;
