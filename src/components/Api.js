 export default class Api {
     constructor({adress, token}) {
        this._token = token
        this._adress = adress
     }

     getInitialCards() {
         return fetch(`${this._adress}/cards`, {
             headers: {
                authorization: this._token
             }
         })
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка:  ${response.status}`))
     }

     getUserInfo() {
         return fetch(`${this.adress}/users/me`, {
             headers: {
                authorization: this._token
             }
         })
         .then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }

     editUserInfo(user, description) {
         return fetch(`${this.adress}/users/me`, {
             headers: {
                 authorization: this._token,
                 'Content-type': 'application/json'
             },
             body: JSON.stringify ({
                 user: user,
                 about: description,                 
             })
             .then(response => response.ok
                ? response.json()
                : Promise.reject(`Произошла ошибка: ${response.status}`))
         })
     }

     addCard(name, link) {
         return fetch(`${this._adress}/cards`, {
             method: 'POST',
             headers: {
                 authorization: this._token,
                 'Content-type': 'application/json'
             },
             body: JSON.stringify({
                 name: name,
                 link: link
             })
         }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }

     editUserAvatar(url) {
        return fetch(`${this._adress}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }

     likeCard(cardId) {
         return fetch(`${this._adress}/cards/likes/${cardId}`, {
             method: 'PUT',
             headers: {
                 authorization: this._token
             }
         }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Ошибка ${response.status}`))
     }

     dislikeCard(cardId) {
         return fetch(`${this._adress}/cards/likes/${cardId}`, {
             method: 'DELETE',
             headers: {
                 authorization: this._token
             }
         }).then(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }

     removeCard(cardId) {
         return fetch(`${this._adress}/cards/${cardId}`, {
             method: 'DELETE',
             headers: {
                 authorization: this._token
             }
         }).token(response => response.ok
            ? response.json()
            : Promise.reject(`Произошла ошибка: ${response.status}`))
     }
}