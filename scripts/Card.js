const openImagePopup = document.querySelector('.popup_type_imagepopup')
const imageLink = document.querySelector('.popup__image')
const titleLink = document.querySelector('.popup__caption')
 
 export default class Card {
     constructor(data, cardSelector) {
        this._name = data.name
        this._link = data._link
        this._alt = data.name
        this._cardSelector = cardSelector
     }

     _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true)

        return cardElement
     }

     generateCard() {
        this._element = this._getTemplate()
        this._setEventListener();
        this._imgElement = this._element.querySelector('.element__image')
        this._element.querySelector('.element__title').textContent = this.name
        this._imgElement.src = this._link
        this._imgElement.alt = this._name

        return this._element
     }

     _setEventListener() {
        this._element.querySelector('.element__delete-button').addEventListener('click', this._deleteCard)
        this._element.querySelector('.element__like-button').addEventListener('click', this._likeButton)
        this._imgElement.addEventListener('click', this._openImage)
     }

     _deleteCard() {
        this._element.remove();
     }

     _likeButton() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
     }

     _openImage() {
         handleOpenPopup()
         imageLink.src = this._link
         imageLink.alt = this._link
         titleLink.textContent = this._name


     }
}

 const handleOpenPopup = (popup) => {
     popup.classList.add('.popup_opened')
     document.addEventListener('keydown', closeOnEsc)
}

 function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        openImagePopup.classList.remove('popup_opened')
    }
}