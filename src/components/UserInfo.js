export default class UserInfo {
    constructor({userName, userDescription, profileAvatars}) {
        this._userName = document.querySelector(userName)
        this._userDescription = document.querySelector(userDescription)
        this._profileAvatars = document.querySelector(profileAvatars)
        
    }

    getUserInfo() {
        const userValue = {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
            avatar: this._profileAvatars.src
        }
          return userValue;
    }

    setUserInfo({name, description, avatar}) {
        if (name) {
            this._userName.textContent = name;
        }
        if (description) {
            this._userDescription.textContent = description;
        }
        if (avatar) {
            this._profileAvatars.src = avatar
        }
    }
}