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
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.setItem(newCard)
  }
}, '.elements')
cardList.renderedItems()





// const profilePopupEdit = new PopupWithForm(profilePopupSelector, submitProfileForm)
// profilePopupEdit.setEventListeners()

// const popupWithImage = new PopupWithImage(imagePopupSelector,imageTagSelector, imageTitleSelector)
// popupWithImage.setEventListeners()

// const cardPopupAdd = new PopupWithForm(cardPopupSelector, submitCardAdd)
// cardPopupAdd.setEventListeners()


// function submitProfileForm() {
//   const userInfo = {
//     name: nameInput,
//     job: jobInput
//   }

//   userInfo.setUserInfo(info)
//   profilePopupEdit.close()
// }

// function submitCardAdd() {
//   inputTitle = inputCardPlace.nodeValue
//   inputLink = inputCardUrl.value

//   const cardItem = ({name: inputCardPlace, link: inputCardUrl})

//   formCard.reset()
//   cardPopupAdd.close()
// }

// function createCard(item) {
//   const newCard = new Card(item, cardTemplate, {
//     handleCardClick: (name, link) => {
//       popupWithImage.open(name,link)
//     }
//   })
//   const newUserCard = newCard.generateCard()
//   return newUserCard
// }

// const cardList = new Section({
//   items: initialCards,
//   renderer: (cardItem) => {
//     const newCard = createCard(cardItem)
//     cardList.setItem(newCard)
//   }
// }, cardSectionSelector)

// cardList.renderedItems()



const profileValidation = new FormValidator(validationConfig, formElementProfile)
const cardValidation = new FormValidator(validationConfig, formElementCard)

profileValidation.enableValidation()
cardValidation.enableValidation()


























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