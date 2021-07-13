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
        this._imgElement = this._element.querySelector('.element__image')
        this._imgElement.src = this._link
        this._imgElement.alt = this._name
        this._element.querySelector('.element__title').textContent = this._name
        this._setEventListeners()
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
}


