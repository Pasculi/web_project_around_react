
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imageClose from './images/vector__close.png'
import PopupWithForm from './components/PopupWithForm';


function App() {
  const handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector('.popup-avatar-edit');
    popupAvatar.classList.add('popup--show');
    console.log(popupAvatar);
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
      <div className="root__container">
        <Header />
        <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick } />
        {/* <PopupWithForm name='profile' titulo='Edit Profile' form='form' button='Guardar'>
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
        </PopupWithForm> */}

        {/* <PopupWithForm name='place' titulo='Edit Place' form='form' button='Guardar'>
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
        </PopupWithForm> */}

        {/* <PopupWithForm name='avatar-edit' titulo='Cambiar foto de perfil' form='form-avatar' button='Guardar'>
           <div className="popup__grupo-input">
                <input className="popup__input" type="url" name="url-avatar" id="popup__input-url-avatar" placeholder="Avatar" required />
                <span className="popup__input-error popup__input-url-avatar-error"></span>
              </div>
        </PopupWithForm> */}

        <PopupWithForm name='confirm' titulo='¿Estas Seguro?' button='Sí' form='form-confirm'/>
          

       
         <div className="container-card">

  

        </div>

{/* 
        <template className="card">
          <div className="card__place">
            <button className="card__place-button--delete">
              <img className="card__place-imagen-trash" src="<%=require('./images/vector__eliminar.png')%>" alt="Eliminar" />
            </button>
            <div className="card__place-container-image">
              <img className="card__place-image-place"
                src='https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg'
                alt="" />
            </div>
            <div className="card__place-footer">
              <h2 className="card__place-name">Valdivia</h2>
              <div className="card__place-like-section">
                <button className="card__place-button--like"></button>
                <span className="card__place-like-counter"></span>
              </div>
            </div>
          </div>
        </template> */}


        <div className="popup popup-profile popup-img-close-profile" id="profile">
          <div className="popup__container">
            <button className="btn popup__button-close popup__button-close-profile">
              <img className="popup__image-close" src={imageClose} alt="Cerrar popup"
                id="img-close-profile" />
            </button>
            <form action="#" className="popup__form popup__form-profile popup-profile-form" id="form-popup-profile" noValidate>
              <h2 className="popup__title">Edit Profile</h2>
      
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
              <button className="popup__button popup__button-profile" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>


        <div className="popup popup-place popup-img-close-place" id="place">
          <div className="popup__container">
            <button className="btn popup__button-close popup__button-close-place">
              <img className="popup__image-close" src={imageClose} alt="Cerrar popup"
                id="img-close-place" />
            </button>
            <form action="" className="popup__form popup__form-place popup-place-form" id="form-popup-place" noValidate>
              <h2 className="popup__title">New Place</h2>
      
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
              <button className="popup__button popup__button-place" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>



        <div className="popup popup-img-close-image">
          <div className="popup__image-content">
            <button className="btn popup__image-button-close">
              <img className="popup__image-close" src={imageClose} alt="Cerrar Modal"
                id="img-close-image" />
            </button>
            <div className="popup__image-container-image">
              <figure className="popup__image-container">
                <img className="popup__image-url"
                  src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/p6oghqt3kgdpjgvqmkww"
                  alt="" />
                <figcaption className="popup__image-name-place"></figcaption>
              </figure>
            </div>
          </div>
        </div>


        <div className="popup popup-confirm">
          <div className="popup__container-confirm">
            <button className="btn popup__button-close popup-button-close-confirm">
              <img className="popup__image-close popup-confirm-image-close" src={imageClose} alt="Cerrar popup" />
            </button>
            <form action="" className="popup-confirm-from">
              <h2 className="popup__title popup-confirm-title">¿Estas seguro/a?</h2>
              <button className="popup-confirm-button-delete" type="submit">
                Sí
              </button>
            </form>
          </div>
        </div>


        <div className="popup popup-avatar-edit" id="popup-avatar-edit">
          <div className="popup-avatar-edit-container">
            <button className="btn popup__button-close popup-avatar-edit-button-close">
              <img className="popup__image-close" src={imageClose} alt="Cerrar popup"
                id="img-close-avatar" />
            </button>
            <form action="" className="popup__form popup-avatar-edit-form" noValidate>
              <h2 className="popup__title">Cambiar foto de perfil</h2>
      
              <div className="popup__grupo-input">
                <input className="popup__input" type="url" name="url-avatar" id="popup__input-url-avatar" placeholder="Avatar" required />
                <span className="popup__input-error popup__input-url-avatar-error"></span>
              </div>
              <button className="popup__button popup-avatar-edit-save" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>




       <Footer />

      </div>
    </>
  );
}

export default App;
