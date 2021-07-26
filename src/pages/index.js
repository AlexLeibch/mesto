import './index.css'
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js'
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
  userNameSelector,
  descriptionSelector,
  classSectionSelector,
  deletePopupSelector,
  userId,
  popupAvatar,
  popupAvatarSelector,
  profileAvatar,
  formAvatar,
  profileAvatarInput,
  updateAvatarButton,
  updateAvatarButtonSelector,
  avatarButtonSave,
} from '../utils/const.js'
import { data } from 'browserslist';

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: '6a8d306b-88c2-4559-b9fb-ed6535e42e98',
    'Content-type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data,item]) => {
  userInfo.setUserInfo(data)
  cardList.renderedItems(item)
})
.catch((error) => {
  console.log(`Произошла ошибка: ${error}`)
})

const popupWithImage = new PopupWithImage(imagePopupSelector, imageTagSelector, imageTitleSelector)
popupWithImage.setEventListeners()

const profilePopupEdit = new PopupWithForm(profilePopupSelector, (inputsValue) => {
  profilePopupEdit.renderLoading(true)
  api.editUserInfo(inputsValue)
  .then(() => {
    userInfo.setUserInfo(inputsValue)
    profilePopupEdit.close()
  })
  .catch((err) => {
    console.log(`Произошла ошибка: ${err}`)
  })
  .finally(() => {
    profilePopupEdit.renderLoading(false)
  })
})
profilePopupEdit.setEventListeners()

const cardPopupEdit = new PopupWithForm(cardPopupSelector, (inputsValue) => {
  cardPopupEdit.renderLoading(true)
  api.addCard(inputsValue.name, inputsValue.link)
  .then(inputsValue => {
    const newCard = createCard(inputsValue)
    cardList.setItem(newCard)
  })
})
cardPopupEdit.setEventListeners()

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, () => {
  popupEditAvatar.renderLoading(true)
  
  api.editUserAvatar(profileAvatarInput.value)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupEditAvatar.close()
  })
    .catch((err) =>{
      console.log(err)
    }).finally(() => {
        popupEditAvatar.renderLoading(false)
  })
})
popupEditAvatar.setEventListeners()

const popupDeleteConfirm = new PopupWithConfirm(deletePopupSelector, (evt, card) => {
  deleteConfirm(evt, card)
})
popupDeleteConfirm.setEventListeners()

const profileValidation = new FormValidator(validationConfig, formElementProfile)
const cardValidation = new FormValidator(validationConfig, formElementCard)
const avatarValidation = new FormValidator(validationConfig, formAvatar)

profileValidation.enableValidation()
cardValidation.enableValidation()
avatarValidation.enableValidation()



function createCard(item) {
  const newCard = new Card(item, cardSelector, {
    handleCardClick: (link, title) => {
      popupWithImage.open(link, title)
    }, likeCardClick: () => {
      const likedCard = newCard.likedCard();
      const resultApi = likedCard ? api.dislikeCard(newCard.getIdCard()) : api.likeCard(newCard.getIdCard());
      resultApi.then(data => {
        newCard.setLikes(data.likes);
        newCard.renderLikes()
      }).catch((err) => {
        console.log(err)
      })
    }, handleCardDelete: () => {
      popupDeleteConfirm.open(newCard)
    }
  }, userId, item._id)
  const newUserCard = newCard.generateCard();
  return newUserCard;
}

const cardList = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    const newCard = createCard(item)
    cardList.setItem(newCard)
  }
}, classSectionSelector)
cardList.renderedItems()


function submitProfileForm(values) {
  userInfo.setUserInfo(values)
  profilePopupEdit.close()
}

addPopupButton.addEventListener('click', () => {
  cardPopupEdit.open()
  cardValidation.disabledButton(cardButtonSave)
  cardValidation.clearInputError(cardButtonSave)
})

const userInfo = new UserInfo({userName: userNameSelector, userDescription: descriptionSelector})
editPopupButton.addEventListener('click', () => {
  profilePopupEdit.open();
  const currentInfo = userInfo.getUserInfo()
  nameInput.value = currentInfo.name
  jobInput.value = currentInfo.description
  profileValidation.clearInputError(cardButtonSave)
})


updateAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open()
  avatarValidation.clearInputError(avatarButtonSave)
})

function submitAddCard(inputValues) {
  const inputTitle = inputValues.placeName
  const inputLink = inputValues['form-link-input']
  const cardItem = {name: inputTitle, link: inputLink}
  const card = createCard(cardItem)
  cardList.setItem(card)
  formElementCard.reset()
  cardPopupEdit.close()
}


const deleteConfirm = (evt, newCard) => {
  evt.preventDefault();
  api.removeCard(newCard.getIdCard())
    .then(res => {
      newCard.removeCard()
      popUpDeleteConfirm.close()
    })
    .catch((err) => {
    console.log(err);
  });
}