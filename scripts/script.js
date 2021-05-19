let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let username = document.querySelector('.profile__username');
let description = document.querySelector('.profile__user-description');
let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_description');

function openPopup (evt) {
    popup.classList.add('popup_opened')
    nameInput.value = (username.textContent);
    jobInput.value = (description.textContent);
}


function closePopup(evt) {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    username.textContent = (nameInput.value);
    description.textContent = (jobInput.value);
    closePopup(evt);
}

formElement.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);