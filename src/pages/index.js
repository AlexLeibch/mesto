import Popup from '../scripts/Popup.js';
import PopupWithForm from '../scripts/PopupWithForm.js'
import PopupWithImage from '../scripts/PopupWithImage.js'
import Section from '../scripts/Section.js'
import UserInfo from '../scripts/UserInfo.js'
import Card from '../scripts/Card.js'
import FormValidator from '../scripts/FormValidator.js';
import {classSection, initialCards, validationConfig} from '../utils/const.js'
import {
  profilePopup,
  cardPopup,
  imagePopup,
  editPopupButton,
  addPopupButton,
  closeButtonProfile,
  closeButtonCard,
  closeButtonImage,
  closeButtonPopUp,
  username,
  description,
  formElementProfile,
  formElementCard,
  nameInput,
  jobInput,
  inputCardPlace,
  inputCardUrl,
  cardSection,
  cardTemplate,
  cardButtonSave,
  imageTag,
  imageTitle,
  popup,
  clearProfile,
  imagePopupSelector,
  profilePopupSelector,
  cardSelector,
  imageTagSelector,
  imageTitleSelector,
  cardPopupSelector,
} from '../utils/const.js'

const popupWithImage = new PopupWithImage('.popup_type_imagepopup', '.popup__image','.popup__caption')
popupWithImage.setEventListeners()

const profilePopupEdit = new PopupWithForm('.popup_type_profile', submitProfileForm)
profilePopupEdit.setEventListeners()

const cardPopupEdit = new PopupWithForm('.popup_type_cardpopup', submitAddCard)
cardPopupEdit.setEventListeners()


const profileValidation = new FormValidator(validationConfig, formElementProfile)
const cardValidation = new FormValidator(validationConfig, formElementCard)

profileValidation.enableValidation()
cardValidation.enableValidation()



function createCard(item) {
  const newCard = new Card(item, cardSelector, {
    handleCardClick: (link, title) => {
      popupWithImage.open(link, title)
    }
  })
  const newUserCard = newCard.generateCard();
  return newUserCard;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item)
    cardList.setItem(newCard)
  }
}, '.elements')
cardList.renderedItems()


function submitProfileForm() {
  const info = {
    user: nameInput.value,
    description: jobInput.value
  }

  userInfo.setUserInfo(info)
  profilePopupEdit.close()
}

addPopupButton.addEventListener('click', () => {
  cardPopupEdit.open()
  cardValidation.disabledButton(cardButtonSave)
})

const userInfo = new UserInfo({userName: '.profile__username', userDescription: '.profile__user-description'})
editPopupButton.addEventListener('click', () => {
  profilePopupEdit.open();
  const currentInfo = userInfo.getUserInfo()
  nameInput.value = currentInfo.name
  jobInput.value = currentInfo.description
  profileValidation.clearInputError(cardButtonSave)
})

function submitAddCard() {
  const inputTitle = inputCardPlace.value
  const inputLink = inputCardUrl.value
  const cardItem = ({name: inputTitle, link: inputLink})
  cardSection.prepend(createCard(cardItem))
  
  formElementCard.reset()
  cardPopupEdit.close()

}














//   const closeOnClick = (evt) => {
//     if(evt.target === evt.currentTarget) {
//       closePopup(document.querySelector('.popup_opened'))
//     }
//   }

// function closeOnEsc(evt) {
//   if (evt.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'))
//   }
// }    
  
//   // функция открытия попапа
// //   const openPopup = (popup) => {
// //     popup.classList.add('popup_opened');
// //     document.addEventListener('keydown', closeOnEsc);
// //     popup.addEventListener('mousedown', closeOnClick);
// //   }

// //  // функция закрытия попапа
// //   const closePopup = (popup) => {
// //     popup.classList.remove('popup_opened');
// //     document.removeEventListener('keydown', closeOnEsc)
// //     popup.removeEventListener('mousedown', closeOnClick)
// //   }


// editPopupButton.addEventListener('click',  () => {
//   openPopup(profilePopup);
//   nameInput.value = username.textContent;
//   jobInput.value = description.textContent;
//   profileValidation.clearInputError(cardButtonSave)

// })

// addPopupButton.addEventListener('click', () => {
//   openPopup(cardPopup);
//   cardValidation.disabledButton(cardButtonSave)
// })



// closePopup(closeButtonPopUp);

// closeButtonProfile.addEventListener('click', () =>{
//  closePopup(profilePopup);
// })

// closeButtonCard.addEventListener('click', () =>{
//   closePopup(cardPopup); 
// })

// closeButtonImage.addEventListener('click', () => {
//  closePopup(imagePopup)
// })

// function handleProfileFormSubmit (evt) {
//  evt.preventDefault();
//  username.textContent = nameInput.value;
//  description.textContent = jobInput.value;
//  closePopup(profilePopup);
// }

// formElementProfile.addEventListener('submit', handleProfileFormSubmit); 



// function submitCardAdd(evt) {
//   evt.preventDefault()
//   const inputPlace = inputCardPlace.value;
//   const inputUrl = inputCardUrl.value;
//   const newCard = new Card({name: inputPlace, link: inputUrl}, '.elements-template', openPopup)
//   const newCardAdd = newCard.generateCard();
//   classSection.prepend(newCardAdd);
//   closePopup(cardPopup)
//   clearProfile.reset()

// }

// formElementCard.addEventListener('submit', submitCardAdd)

// initialCards.forEach((item) => {
//   const card = new Card(item, '.elements-template', openPopup)
//   const cardElement = card.generateCard()
//   classSection.append(cardElement);
// })