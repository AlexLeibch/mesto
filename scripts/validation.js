


const arrayForms = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-save',
    disabledButtonSelector: 'popup__button-disabled',
    inputErrorClass: 'popup__field-invalid',
    errorClass: 'popup__error'
  };
  
  
  const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorClass);
  }
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(errorClass)
    errorElement.classList.remove(inputErrorClass)
    errorElement.textContent = "";
  }
  
  const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
    }else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass)
    }
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  const toggleButtonState = (inputList, buttonElement, disabledButtonSelector) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(disabledButtonSelector)
      buttonElement.setAttribute('disabled', true);
    }else {
      buttonElement.classList.remove(disabledButtonSelector)
      buttonElement.removeAttribute('disabled');
    }
  }
  
  
  
  
  const setEventListeners = (formElement, inputSelector, submitButtonSelector, disabledButtonSelector, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",() => {
        isValid(formElement, inputElement, errorClass, inputErrorClass)
        toggleButtonState(inputList, buttonElement, disabledButtonSelector);
      })
    })
    toggleButtonState(inputList, buttonElement, disabledButtonSelector);
  }

  const enableValidation = ({
                              formSelector,
                              inputSelector,
                              submitButtonSelector,
                              disabledButtonSelector,
                              inputErrorClass,
                              errorClass
                            }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
        evt.preventDefault();
      });
      setEventListeners(formElement, inputSelector, submitButtonSelector, disabledButtonSelector, inputErrorClass, errorClass);
    });
  }
  
  enableValidation(arrayForms);
