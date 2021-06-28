import Card from './Card1.js'
import {FormValidator} from './FormValidator.js';
import {classSection, initialCards, validationConfig} from './const.js'
const profilePopup = document.querySelector('.popup_type_profile') // редактировать профиль попапа
const cardPopup = document.querySelector('.popup_type_cardpopup'); // редактировать попап карточек
const imagePopup = document.querySelector('.popup_type_imagepopup'); // попап открытия фотографии
const editPopupButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const addPopupButton = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const closeButtonProfile = profilePopup.querySelector('.popup__button-close'); // кнопка закрытия редактирования профиля
const closeButtonCard =  cardPopup.querySelector('.popup__button-close'); // кнопка закрытия добавления карточки
const closeButtonImage = imagePopup.querySelector('.popup__button-close'); // кнопка закрытия фотографии
const closeButtonPopUp = document.querySelector('.popup__button-close')
const username = document.querySelector('.profile__username'); // имя профиля в профиле
const description = document.querySelector('.profile__user-description'); // описание профиля на странице
const formElementProfile = profilePopup.querySelector('.popup__form-profile'); // форма ввода инфы в профиле
const formElementCard = cardPopup.querySelector('.popup__form-card') // форма для вставки фотографии
const nameInput = document.querySelector('.popup__field_type_name'); // поле для ввода имени
const jobInput = document.querySelector('.popup__field_type_description'); // поле для ввода описания
const inputCardPlace = cardPopup.querySelector('.popup__field_type_place'); // поле для ввода места
const inputCardUrl = cardPopup.querySelector('.popup__field_type_imageUrl'); // поле для ввода ссылки
const cardSection = document.querySelector('.elements'); // секция фотокарточек
const cardTemplate = document.querySelector('.elements-template'); // template вставка
const cardButtonSave = cardPopup.querySelector('.popup__button-save')
const imageTag = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__caption');
const popup = document.querySelector('.popup')
const clearProfile = document.forms['popup-card']

  function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'))
    }
  }  

  
  const closeOnClick = (evt) => {
    if(evt.target === evt.currentTarget) {
      closePopup(document.querySelector('.popup_opened'))
    }
  }

  
  
  // функция открытия попапа
  const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
    popup.addEventListener('mousedown', closeOnClick);
  }

 // функция закрытия попапа
  const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc)
    popup.removeEventListener('mousedown', closeOnClick)
  }


editPopupButton.addEventListener('click',  () => {
  openPopup(profilePopup);
  nameInput.value = username.textContent;
  jobInput.value = description.textContent;
})

addPopupButton.addEventListener('click', () => {
  openPopup(cardPopup);
})



closePopup(closeButtonPopUp);

closeButtonProfile.addEventListener('click', () =>{
 closePopup(profilePopup);
})

closeButtonCard.addEventListener('click', () =>{
  closePopup(cardPopup); 
})

closeButtonImage.addEventListener('click', () => {
 closePopup(imagePopup)
})

function handleProfileFormSubmit (evt) {
 evt.preventDefault();
 username.textContent = nameInput.value;
 description.textContent = jobInput.value;
 closePopup(profilePopup);
}

formElementProfile.addEventListener('submit', handleProfileFormSubmit); 



function submitCardAdd(evt) {
  evt.preventDefault()
  const inputPlace = inputCardPlace.value;
  const inputUrl = inputCardUrl.value;
  const newCard = new Card({name: inputPlace, link: inputUrl}, '.elements-template', openPopup)
  const newCardAdd = newCard.generateCard();
  classSection.prepend(newCardAdd);
  closePopup(cardPopup)
  clearProfile.reset()


}

formElementCard.addEventListener('submit', submitCardAdd)

initialCards.forEach((item) => {
  const card = new Card(item, '.elements-template', openPopup)
  const cardElement = card.generateCard()
  classSection.append(cardElement);
})

const profileValidation = new FormValidator(validationConfig, formElementProfile)
const cardValidation = new FormValidator(validationConfig, formElementCard)

profileValidation.enableValidation()
cardValidation.enableValidation()
// // function addCard(evt) {
  
//   evt.preventDefault()
//   const inputPlace = inputCardPlace.value;
//   const inputUrl = inputCardUrl.value;
//   const cardItem = createNewCard({name: inputPlace, link: inputUrl})
//   cardSection.prepend(cardItem);

//   inputCardPlace.value = ''
//   inputCardUrl.value = ''

//   const buttonSubmit = evt.target.querySelector('.popup__button-save')
//   buttonSubmit.setAttribute('disabled', 'true');
//   buttonSubmit.classList.add('popup__button-disabled');

//   closePopup(cardPopup)
// }

// renderCard()






// function createNewCard(item) {
//   const addCard = cardTemplate.content.cloneNode(true);
//   const addImg = addCard.querySelector('.element__image');
//   const addTitle = addCard.querySelector('.element__title');

//   addImg.src = item.link
//   addImg.alt = item.name
//   addTitle.textContent = item.name

//   const likeButton = addCard.querySelector('.element__like-button')
 
//  likeButton.addEventListener('click', (evt) => {
//    evt.target.classList.toggle('element__like-button_active')
//  });

//  const removeButton = addCard.querySelector('.element__delete-button')

//  // кнопка удаления

//  removeButton.addEventListener('click', function () {
//    const cardItem = removeButton.closest('.card');
//    cardItem.remove()
//  });

//   addImg.addEventListener('click', function (){
//    openPopup(imagePopup)
//    imageTag.src = addImg.src
//    imageTag.alt = addImg.alt
//    imageTitle.textContent = addTitle.textContent
//  });

//  return addCard
// }

// function renderCard() {
//  const arrayCards = initialCards
//    .map(createNewCard)
//    cardSection.append(...arrayCards)
// }