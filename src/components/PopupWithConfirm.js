import Popup from './Popup'
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector)
        this._submitForm = submitForm   
        this._popupSubmitButton = this._popupSubmitButton.querySelector('.popup__button-save')
        this._submitButtonText = this._popupSubmitButton.textContent
    }
    
    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(evt, this._card)
            this.close()
        })
    }

    open(card) {
        super.open()
        this._card = card
    }
}