import './index.css'
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
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
} from '../utils/const.js'

const popupWithImage = new PopupWithImage(imagePopupSelector, imageTagSelector, imageTitleSelector)
popupWithImage.setEventListeners()

const profilePopupEdit = new PopupWithForm(profilePopupSelector, submitProfileForm)
profilePopupEdit.setEventListeners()

const cardPopupEdit = new PopupWithForm(cardPopupSelector, submitAddCard)
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
  items: initialCards.reverse(),
  renderer: (item) => {
    const newCard = createCard(item)
    cardList.setItem(newCard)
  }
}, classSectionSelector)
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

function submitAddCard(inputValues) {
  const inputTitle = inputValues.placeName
  const inputLink = inputValues['form-link-input']
  const cardItem = ({name: inputTitle, link: inputLink})
  const card = createCard(cardItem)
  cardList.setItem(card)
  formElementCard.reset()
  cardPopupEdit.close()
}
