 export default class Api {
     constructor(options) {
        this._options = options
     }

     getInitialCards() {
         return fetch('https://mesto.nomoreparties.co/v1/cohort-26/cards', this._options)
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка:  ${response.status}`)
            )
     }

     getUserInfo() {
         return fetch('https://mesto.nomoreparties.co/v1/cohort-26/users/me', this._options)
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`)
            )
     }

     editUserInfo(inputValue) {
         const newOptions = {
             ...this._options,
             body: JSON.stringify(inputValue),
             method: 'PATCH',
         }
         return fetch('https://mesto.nomoreparties.co/v1/cohort-26/users/me', newOptions)
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`)
            )
     }

     addCard(inputValue) {
        const newOptions = {
            ...this._options,
            body: JSON.stringify(inputValue),
            method: 'POST'
        }
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/cards', newOptions)
        .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`)
            )
     }

     editUserAvatar(inputsValue) {
        const newOptions = {
            ...this._options,
            body: JSON.stringify(inputsValue),
            method: 'PATCH'
        }
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/user/me/avatar', newOptions)
        .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`)
            )
     }

     likeCard(cardId) {
         const newOptions = {
             ...this._options,
             method: 'PUT',
         }
         return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/${cardId}`, newOptions)
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла Ошибка: ${response.status}`)
            )
     }

     dislikeCard(cardId) {
        const newOptions = {
            ...this._options,
            method: 'DELETE',
        }
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/${cardId}`, newOptions) 
        .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }

     removeCard(cardId) {
         const newOptions = {
             ...this._options,
             method: 'DELETE',
         }
         return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/${cardId}`, newOptions)
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }
}