import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector)
        this._submitForm = submitForm
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
        })
    }
    close() {
        super.close()
        this._popupSelector.querySelector('.popup__form').reset()
        
    }
}