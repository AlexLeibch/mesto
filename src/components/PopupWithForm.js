import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector)
        this._submitForm = submitForm
        this._popupSubmitButton = this._popupSelector.querySelector('.popup__button-save')
        this._submitButtonText = this._popupSubmitButton.textContent
    }

    _getInputValues() {
        this._formPopup = this._popupSelector.querySelectorAll('.popup__field')
        this._inputValue = {}
        this._formPopup.forEach(input => {
            this._inputValue[input.name] = input.value
        })
        return this._inputValue
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this._getInputValues())
            this.close()
        })
    }
    close() {
        super.close()
        this._popupSelector.querySelector('.popup__form').reset()
        
    }

    renderLoading(isLoading, loadingMessage='Сохранение...') {
        if(isLoading) {
            this._popupSubmitButton.textContent = loadingMessage
        } else {
            this._popupSubmitButton.textContent = this._submitButtonText
        }
    }
}