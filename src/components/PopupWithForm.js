import React from 'react'
import imageClose from '../images/vector__close.png';


const PopupWithForm = ({name, titulo, form, button, children}) => {
  return (
    <>
      <div className={`popup popup-${name} popup-img-close-${name} popup--show` } id={`${name}`}>
        <div className={`popup__container-${form}`}>
          <button className={`btn popup__button-close popup__button-close-${name}`}>
            <img className="popup__image-close" src={imageClose} alt="Cerrar popup"
              id={`img-close-${name}`} />
          </button>
          <form action="#" name={`${name}`} className={`popup__${form} popup__form-${name} popup-${name}-from`} id={`form-popup-${name}`} noValidate>
            <h2 className="popup__title">{`${titulo}`}</h2>
            {children}
            
            <button className={`popup__button popup__button-${name}`} type="submit">
              {button}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm
