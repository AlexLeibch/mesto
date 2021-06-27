export default class FormValidator {
    constructor(array, formElement) {
        this._array = array
        this._formElement = formElement;
    }

    _showInputEror(inputElement, errorMessage ) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._array.inputErorrClass)
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass) 
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._array.inputErrorClass)
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass)
    }

    _isValid(inputElement) {
        if (!inputElement.validity.validity) {
            this._showInputError(inputElement,  inputElement.validationMessage)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        }) 
    }

    _enableSubmitButton() {
        buttonElement.classList.remove(this._array.disabledButtonSelector)
        buttonElement.removeAttribute('disabled');  
    }

    _disableSubmitButton() {
        buttonElement.classList.add(this._array.disabledButtonSelector)
        buttonElement.setAttribute('disable', 'disable')
    }

    _toggleButtonState(inputList, buttonElement) {
        if(this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement)
        } else {
            this._enableSubmitButton(buttonElement)
        }
    }

    _setEventListeners() {
        const inputList = array.form(this._formElement.querySelector(this._array.inputSelector))
        const buttonElement = this._formElement.querySelector(this._array.submitButtonSelector)
        this._toggleButtonState(inputList, buttonElement);
            inputList.forEach((inputElement) => {
                this._isValid(inputElement)
                this._toggleButtonState(inputList, buttonElement)
            })
    }

    enableValidation() {
        this._setEventListeners();
    }
}