const profilePopup = document.querySelector('.popup_type_profile') // редактировать профиль попапа
const cardPopup = document.querySelector('.popup_type_cardpopup'); // редактировать попап карточек
const imagePopup = document.querySelector('.popup_type_imagepopup'); // попап открытия фотографии
const editPopupButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const addPopupButton = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const closeButtonProfile = profilePopup.querySelector('.popup__button-close'); // кнопка закрытия редактирования профиля
const closeButtonCard =  cardPopup.querySelector('.popup__button-close'); // кнопка закрытия добавления карточки
const closeButtonImage = imagePopup.querySelector('.popup__button-close'); // кнопка закрытия фотографии
const closeButtopPopUp = document.querySelector('.popup__button-close')
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
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'))
    }
  }  

  
const closeOnClick = (popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget) {
      popup.classList.remove('popup_opened');
    }
  })
}

  
  
  // функция открытия попапа
 const openPopup = (popup) => {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closeOnEsc) 
  closeOnClick(popup)

}

 // функция закрытия попапа
 const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc)
  closeOnClick(popup)
 
 }

editPopupButton.addEventListener('click',  () => {
  openPopup(profilePopup);
  nameInput.value = (username.textContent);
  jobInput.value = (description.textContent);
})

addPopupButton.addEventListener('click', () => {
 openPopup(cardPopup);
})



closePopup(closeButtopPopUp);

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
 username.textContent = (nameInput.value);
 description.textContent = (jobInput.value);
 closePopup(profilePopup);
}

formElementProfile.addEventListener('submit', handleProfileFormSubmit); 

function createNewCard(item) {
 const addCard = cardTemplate.content.cloneNode(true);
 const addImg = addCard.querySelector('.element__image');
 const addTitle = addCard.querySelector('.element__title');

 addImg.src = item.link
 addImg.alt = item.name
 addTitle.textContent = item.name

 const likeButton = addCard.querySelector('.element__like-button')
 
 likeButton.addEventListener('click', (evt) => {
   evt.target.classList.toggle('element__like-button_active')
 });

 const removeButton = addCard.querySelector('.element__delete-button')

 // кнопка удаления

 removeButton.addEventListener('click', function () {
   const CardItem = removeButton.closest('.card');
   CardItem.remove()
 });



 addImg.addEventListener('click', function (){
   openPopup(imagePopup)
   imageTag.src = addImg.src
   imageTag.alt = addImg.alt
   imageTitle.textContent = addTitle.textContent
 });

 return addCard
}

function renderCard() {
 const arrayCards = initialCards
   .map(createNewCard)
   cardSection.append(...arrayCards)
}

function addCard(evt) {
  
 evt.preventDefault()
 const inputPlace = inputCardPlace.value;
 const inputUrl = inputCardUrl.value;

 const cardItem = createNewCard({name: inputPlace, link: inputUrl})
 cardSection.prepend(cardItem);

 inputCardPlace.value = ''
 inputCardUrl.value = ''

 closePopup(cardPopup)
}

formElementCard.addEventListener('submit', addCard) 
renderCard()

