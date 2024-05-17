import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm'

const AddPlacePopup = ({ isOpen, onClose, onAddPlaceSubmit }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ name, link })
    onAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
  };
  return (

    <PopupWithForm
      name='place'
      titulo='Editar Lugar'
      form='form'
      button='Guardar'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__grupo-input">
        <input
          className="popup__input"
          type="text" name="name-place"
          id="popup__input-name-place"
          placeholder="Title"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__input-error popup__input-name-place-error"></span>
      </div>

      <div className="popup__grupo-input">
        <input
          className="popup__input"
          type="url"
          name="url-place"
          id="popup__input-url-place"
          placeholder="Enlace a la imagen"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__input-error popup__input-url-place-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup
