export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        // this._formSelector = validationConfig.formSelector
        // this._inputSelector = validationConfig.inputSelector
        // this._submitButtonSelector = validationConfig.submitButtonSelector
        // this._disabledButtonSelector = validationConfig.disabledButtonSelector
        // this._inputErrorClass = validationConfig.inputErrorClass
        // this._errorClass = validationConfig.errorClass
    }

    _showInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
        inputElement.classList.add(this._validationConfig.inputErrorClass)
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._validationConfig.errorClass)
    }

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.remove(this._validationConfig.errorClass);
    }

    _chekInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement)
        } else {
            this._hideInputError(formElement, inputElement)
        }
    }

    _hasInvalidInput(inputs)  {
        return Array.from(inputs).some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState(buttonElement, inputs) {
        if (this._hasInvalidInput(inputs)) {
            buttonElement.classList.add(this._validation.disabledButtonSelector)
            buttonElement.setAttribute('disabled', true)
        } else {
            buttonElement.classList.remove(disabledButtonSelector)
            buttonElement.removeAttribute('disabled')
        }
    }

    _setEventListeners(formElement) {
        const inputs = Array.from(formElement.querySelectorAll(this._validationConfig.inputSelector))
        const button = formElement.querySelector(this._validationConfig.submitButtonSelector);
        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._chekInputValidity(formElement, inputElement);
                this._toggleButtonState(button, inputs);
            })
        })
    }

    _clearInputError(popup) {
        const inputs = Array.from(popup.querySelectorAll(this._validationConfig.inputSelector));
        inputs.forEach(inputElement => {
            inputElement.classList.remove(this._validationConfig.inputErrorClass)
            const errorElement = document.querySelector(`#${inputElement.id}-error`)
            errorElement.textContent = '';
            errorElement.classList.remove(this._validationConfig.errorClass)
        })
    }

    _disabledSubmitButton(formElement) {
        const activePopup = formElement.querySelector(this._validationConfig.popupOpen)
        const button = activePopup.querySelector(this._validationConfig.submitButtonSelector);
        button.setAttribute('disabled', 'true')
        button.classList.add(this._validation.inactiveButtonClass)
    }
    
    enableValidation() {
        const forms = document.querySelectorAll(this._validationConfig.formSelector);
        forms.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault
            })
            this._setEventListeners(formElement);
        })
    }



}