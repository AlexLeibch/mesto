const arrayForms = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    disabledButtonSelector: 'popup__button-disabled',
    inputErrorClass: 'popup__field-invalid',
    errorClass: 'popup__error'
  };


class FormValidator() {
    constructor(validationConfig, formElement) {
        this._formSelector = validationConfig.formSelector
        this._inputSelector = validationConfig.inputSelector
        this._submitButtonSelector = validationConfig.submitButtonSelector
        this._disabledButtonSelector = validationConfig.disabledButtonSelector
        this._inputErrorClass = validationConfig.inputErrorClass
        this._errorClass = validationConfig.errorClass
    }
}