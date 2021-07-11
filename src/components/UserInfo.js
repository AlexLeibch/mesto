export default class UserInfo {
    constructor({userName, userDescription}) {
        this._userName = document.querySelector(userName)
        this._userDescription = document.querySelector(userDescription)
    }

    getUserInfo() {
        const userValue = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        }
          return userValue;
    }

    setUserInfo({user, description}) {
        this._userName.textContent = user
        this._userDescription.textContent = description 
    }
}