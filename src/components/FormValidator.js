export default class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))
    }

    _showInputError( inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._validationConfig.inputErrorClass)
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._validationConfig.errorClass)
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.remove(this._validationConfig.errorClass);

    }

    _chekInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidInput(inputs)  {
        return Array.from(inputs).some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState(buttonElement, inputs) {
        if (this._hasInvalidInput(inputs)) {
            this.disabledButton(buttonElement)
        } else {
            buttonElement.classList.remove(this._validationConfig.disabledButtonSelector)
            buttonElement.removeAttribute('disabled')
        }
    }

    _setEventListeners() {
        const inputs = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))
        const button = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._chekInputValidity(inputElement);
                this._toggleButtonState(button, inputs);
            })
           this._toggleButtonState(button, inputs);
        })
    }

    clearInputError() {
        this._inputList.forEach(inputElement => {
          this._hideInputError(inputElement);
          this._formElement.querySelector(`.${inputElement.id}-error`).textContent = '';
    
      });
    }

    disabledButton(buttonElement) {
        buttonElement.setAttribute('disabled', 'true')
        buttonElement.classList.add(this._validationConfig.disabledButtonSelector)
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault
        })
        this._setEventListeners(this._formElement);
    }
}