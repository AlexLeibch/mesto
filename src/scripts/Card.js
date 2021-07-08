import {classSection, initialCards, validationConfig} from '../utils/const.js'
const popupImage = document.querySelector('.popup_type_imagepopup')
const imageTag = popupImage.querySelector('.popup__image');
const imageTitle = popupImage.querySelector('.popup__caption');

export default class Card {
    constructor(data, cardSelector, {handleCardClick}) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
        return cardElement;
    }

    _like() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
    }

    _deleteCard() {
        this._element.querySelector('.element__delete-button').closest('.card').remove()

    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners()
        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__image').alt = this._name
        this._element.querySelector('.element__title').textContent = this._name

        return this._element
    }



    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._like()
        })

        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard()
        })

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }

    _openImage() {
        this._openPopup(popupImage)
        imageTag.src = this._link
        imageTag.alt = this._name
        imageTitle.textContent = this._name
    }


}


