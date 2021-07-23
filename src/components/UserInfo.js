export default class UserInfo {
    constructor({userName, userDescription, profileAvatar}) {
        this._userName = document.querySelector(userName)
        this._userDescription = document.querySelector(userDescription)
        this._profileAvatar = document.querySelector(profileAvatar)
    }

    getUserInfo() {
        const userValue = {
            name: this._userName.textContent,
            description: this._userDescription.textContent,
            avatar: this._profileAvatar.src
        }
          return userValue;
    }

    setUserInfo({name, description, avatar}) {
        if (name) {
            this._userName.textContent = name;
        }
        if (description) {
            this._userDescription.textcontent = description
        }
        if (avatar) {
            this._profileAvatar.src = avatar
        }
    }
}