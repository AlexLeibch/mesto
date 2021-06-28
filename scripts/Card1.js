const classSection = document.querySelector('.elements')
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

class Card {
    constructor(data, cardSelector) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
        
        return cardElement
    }

    _like() {
         this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
    }

    _deleteCard() {
        this._element.querySelector('.element__delete-button').closest('.card').remove()

    }



    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._like()
        })

        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard()
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners()
        this._element.querySelector('.element__image').src = this._link
        this._element.querySelector('.element__image').alt = this._name
        this._element.querySelector('.element__title').textContent = this._name

        return this._element
    }
}

    































    initialCards.forEach((item) => {
        const card = new Card(item, '.elements-template')
        const cardElement = card.generateCard()
        
        classSection.append(cardElement);
})