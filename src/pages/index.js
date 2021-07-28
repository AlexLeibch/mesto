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
import {classSection, validationConfig} from '../utils/const.js'
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
  profileSelector
} from '../utils/const.js'

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: '6a8d306b-88c2-4559-b9fb-ed6535e42e98',
    'Content-type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data,items]) => {
  const reverseItems = items.reverse()
  userInfo.setUserInfo(data)
  cardList.renderedItems(reverseItems)
})
.catch((error) => {
  console.log(`Произошла ошибка: ${error}`)
})

const popupWithImage = new PopupWithImage(imagePopupSelector, imageTagSelector, imageTitleSelector)
popupWithImage.setEventListeners()

const popupEditProfile = new PopupWithForm(profilePopupSelector, (inputsValue) => {
  popupEditProfile.renderLoading(true)
  api.editUserInfo(inputsValue.name, inputsValue.description)
  .then(() => {
    userInfo.setUserInfo(inputsValue)
    popupEditProfile.close()
  })
  .catch((err) => {
    console.log(`Произошла ошибка: ${err}`)
  })
  .finally(() => {
    popupEditProfile.renderLoading(false)
  })
})
popupEditProfile.setEventListeners()

const popupAddCard = new PopupWithForm(cardPopupSelector, (inputsValue) => {
  popupAddCard.renderLoading(true)
  api.addCard(inputsValue.placeName, inputsValue['form-link-input'])
  .then(inputsValue => {
    const newCard = createCard(inputsValue)
    cardList.setItem(newCard)

  })
  .finally(() => {
    popupAddCard.renderLoading(false)
  })
})
popupAddCard.setEventListeners()

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
  renderer: (cardItem) => {
    const newCard= createCard(cardItem)
    cardList.setItem(newCard)
  }
}, classSectionSelector)

addPopupButton.addEventListener('click', () => {
  popupAddCard.open()
  cardValidation.disabledButton(cardButtonSave)
  cardValidation.clearInputError(cardButtonSave)
})

const userInfo = new UserInfo(profileSelector)
editPopupButton.addEventListener('click', () => {
  popupEditProfile.open();
  const currentInfo = userInfo.getUserInfo()
  nameInput.value = currentInfo.name
  jobInput.value = currentInfo.about
  profileValidation.clearInputError(cardButtonSave)
})


updateAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open()
  avatarValidation.clearInputError(avatarButtonSave)
  avatarValidation.disabledButton(avatarButtonSave)
})

const deleteConfirm = (evt, newCard) => {
  evt.preventDefault();
  api.removeCard(newCard.getIdCard())
    .then(res => {
      newCard.removeCard()
      popupDeleteConfirm.close()
    })
    .catch((err) => {
    console.log(err);
  });
}