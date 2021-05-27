const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const username = document.querySelector('.profile__username');
const description = document.querySelector('.profile__user-description');
const formElement = document.querySelector('.popup__input');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_description');
const openPopupButtonAddCard = document.querySelector('.profile__add-button')

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
openPopupButtonAddCard.addEventListener('click', openPopup);

