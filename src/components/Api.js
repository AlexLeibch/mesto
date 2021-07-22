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
 }