//  function enableValidation() {
//      const form = document.querySelector('.popup__form[name="popup-card"]')

//      form.addEventListener('submit', handleFormSubmit);
//      form.addEventListener('input', handleFormInput);
//  }

//  function handleFormSubmit(event) {
//      event.preventDefault()

//      const form = event.currentTarget;
//      const isValid = form.checkValidity();

//      if(isValid) {
//          alert('Form Valid')
//          form.reset();
//      } else {
//          alert('Form is Invalid')
//      }
//  };

//  function handleFormInput(event) {
//      const input = event.target;
//      const form = event.currentTarget;

//     //  1.определить невалидные поля и вывести ошибку
//     setCustomError(input);
//     // 2. отобразить ошибки на форме
//     setFieldError(input);
//     // 3. активная/неактивная кнопка
//     setButtonState(form);
//  };

//  function setCustomError(input) {
//      const validity = input.validity;
//      input.setCustomValidity('');
     
//      if (validity.tooShort || validity.tooLong) {
//          const currentLength = input.value.length;
//          const min = input.getAttribute('minlength');
//          const max = input.getAttribute('maxlength');
//          input.setCustomValidity(`Строка имеет неверную длинну. Введено ${currentLength}, а должно быть от ${min} до ${max}`)
//      }
//      if (validity.typeMismatch) {
//          input.setCustomValidity('Это не ссылка')
//      }
//  };

//  function setFieldError(input) {
//      const span = document.querySelector(`#${input.id}-error`)
//      span.textContent = input.validationMessage;
//  };

//  function setButtonState(form) {
//      const button = form.querySelector('popup__button-save');
//      const isValid = form.checkValidity()
//      if (isValid) {
//          button.classList.add('popup__button_valid');
//          button.classList.remove('popup__button_invalid')
//          button.removeAttribute('disabled', 'disabled');
//      } else {
//         button.classList.remove('popup__button_valid');
//         button.classList.add('popup__button_invalid')
//         button.setAttribute('disabled', 'disabled');
//      }
//  }

//  enableValidation()

// console.log(document.forms.profilePopup)





// formProfile.addEventListener('submit', function (event){
//     event.preventDefault();
//     const input = formProfile.elements.name;
//     const description = formProfile.elements.description;
//     console.log(input.value)
//     console.log(description.value)
// });

// formProfile.addEventListener('input', function (event){
//     console.log(event)
// })


// const formProfile = document.forms.profilePopup;
// const addButton = document.querySelector('.popup__button-save');
// const nameField = formProfile.elements.name;
// const descriptionField = formProfile.elements.description;


// function setSubmitButtonState(isFormValid) {
//     if (isFormValid) {
//         addButton.removeAttribute('disabled');
//         addButton.classList.remove('.popup__button-disabled')
//     } else {
//         addButton.setAttribute('disabled', 'disabled')
//         addButton.classList.add('.popup__button-disabled')
//     }
// }






// const form = document.querySelector('.popup__form')
// const formInput = form.querySelector('.popup__field')
// const formError = form.querySelector(`.${formInput.id}-error`);

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__field-invalid')
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__error')
// };

// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('popup__field-invalid')
//     formError.textContent = errorMessage;
//     errorElement.classList.remove('popup__error')
//     formError.textContent = "";
// }

// const isValid = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage)
//     } else {
//         hideInputError(formElement, inputElement)
//     }
// };

// const toggleButtonState = (inputList, buttonElement) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('popup__button-disabled')
//     } else {
//         buttonElement.classList.remove('popup__button-disabled')
//     }
// }

// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__field'))
//     const buttonElement = form.querySelector('.popup__button-save')
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             isValid(formElement, inputElement);

//             toggleButtonState(inputList, buttonElement)
//         });
//     });
// };




// const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.popup__form'));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', (evt) => {
//             evt.preventDefault()
//         });
//         setEventListeners(formElement);
//     });
// };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// }



// enableValidation()


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
    errorElement.textContent = ""
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
