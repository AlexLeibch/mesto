export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this)
        this._handleClickClose = this._handleClickClose.bind(this)
    }
    open() {
        this._popupSelector.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }
    
    close() {
        this._popupSelector.classList.remove('popup_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    _handleClickClose(evt) {
        if(evt.target !== this._popupSelector) return; {
            this.close()
        }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__button-close').addEventListener('click', () => this.close())
        this._popupSelector.addEventListener('mousedown', (evt) => this._handleClickClose(evt))
    }

}
