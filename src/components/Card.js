export default class Card { 
    constructor(item, cardSelector, {handleCardClick, likeCardClick, handleCardDelete}, userId, cardId) {
        this._name = item.name        
        this._link = item.link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
        this._likeCardClick = likeCardClick
        this._handleCardDelete = handleCardDelete
        this._countLikes = item.likes
        this._userId = userId
        this._cardId = cardId
        this._ownerId = item.owner._id;
  
        
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

    deleteCard() {
        this._element.querySelector('.element__delete-button').closest('.card').remove()

    }

    generateCard() {
        this._element = this._getTemplate();
        this._imgElement = this._element.querySelector('.element__image')
        this._imgElement.src = this._link
        this._imgElement.alt = this._name
        this._element.querySelector('.element__title').textContent = this._name
        this._handleLike = this._element.querySelector('.element__like-button')
        this._likes = this._element.querySelector('.element__like-counter')
        this._deleteIcon = this._element.querySelector('.element__delete-button')
        if (this._ownerId !== this._userId) {
            this._deleteIcon.style.display = 'none'
        }

        this.renderLikes()

        this._setEventListeners()
        return this._element
    }

    _setEventListeners() {
        this._handleLike.addEventListener('click', () => {
            this._likeCardClick()
            this._like()
        })
        const deleteButton = this._element.querySelector('.element__delete-button')
        deleteButton.addEventListener('click', () => {
            this._handleCardDelete()
        })

        this._imgElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }

    removeCard() {
        this._element.remove()
    }

    renderLikes() {
        this._likes.textContent = this._countLikes.length
        this._showLikes(this._userId)
    }

    getIdCard() {
        return this._cardId
    }

    likedCard() {
        return this._countLikes.some(like => {
            return like._id === this._userId
        })
    }

    _showLikes() {
        if (this.likedCard(this._userId)) {
            this._handleLike.classList.add('element__like-button_active')
        } else {
            this._handleLike.classList.remove('element__like-button_active')
        }
    }
    setLikes(list) {
        this._countLikes = list
    }
}


