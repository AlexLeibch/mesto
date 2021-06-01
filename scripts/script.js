const profilePopup = document.querySelector('.profilepopup') // редактировать профиль попапа
const cardPopup = document.querySelector('.cardpopup'); // редактировать попап карточек
const imagePopup = document.querySelector('.imagepopup'); // попап открытия фотографии
const editPopupButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const addPopupButton = document.querySelector('.profile__add-button'); // кнопка добавления карточки
const closeButtonProfile = profilePopup.querySelector('.popup__button-close'); // кнопка закрытия редактирования профиля
const closeButtonCard =  cardPopup.querySelector('.popup__button-close'); // кнопка закрытия добавления карточки
const closeButtonImage = imagePopup.querySelector('.popup__button-close'); // кнопка закрытия фотографии
const closeButtopPopUp = document.querySelector('.popup__button-close')
const username = document.querySelector('.profile__username'); // имя профиля в профиле
const description = document.querySelector('.profile__user-description'); // описание профиля на странице
const formElement = profilePopup.querySelector('.popup__input'); // форма ввода инфы в профиле
const cardElement = cardPopup.querySelector('.popup__input') // форма для вставки фотографии
const nameInput = document.querySelector('.popup__field_type_name'); // поле для ввода имени
const jobInput = document.querySelector('.popup__field_type_description'); // поле для ввода описания
const inputCardPlace = cardPopup.querySelector('.popup__field_type_place'); // поле для ввода места
const inputCardUrl = cardPopup.querySelector('.popup__field_type_imageUrl'); // поле для ввода ссылки
const cardSection = document.querySelector('.elements'); // секция фотокарточек
const cardTemplate = document.querySelector('.elements-template'); // template вставка
const cardButtonSave = cardPopup.querySelector('.popup__button-save')
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

   // функция открытия попапа
 const openPopup = (popUpElement) => {
  popUpElement.classList.add('popup_opened');  
}

editPopupButton.addEventListener('click',  () => {
  openPopup(profilePopup);
  nameInput.value = (username.textContent);
  jobInput.value = (description.textContent);
})

addPopupButton.addEventListener('click', () => {
 openPopup(cardPopup);
})

 // функция закрытия попапа
const closePopup = (popUpElement) => {
 popUpElement.classList.remove('popup_opened');

}
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

function formSubmitHandler (evt) {
 evt.preventDefault();
 username.textContent = (nameInput.value);
 description.textContent = (jobInput.value);
 closePopup(profilePopup);
}

formElement.addEventListener('submit', formSubmitHandler);

function newCard(item) {
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

 const imageTag = document.querySelector('.popup__image');
 const imageTitle = document.querySelector('.popup__caption');

 addImg.addEventListener('click', function (){
   openPopup(imagePopup)
   imageTag.src = addImg.src
   imageTitle.textContent = addTitle.textContent
 });

 return addCard
}

function renderCard() {
 const arrayCards = initialCards
   .map(newCard)
   cardSection.append(...arrayCards)
}

function addCard(evt) {
 evt.preventDefault()
 const inputPlace = inputCardPlace.value;
 const inputUrl = inputCardUrl.value;

 const cardItem = newCard({name: inputPlace, link: inputUrl})
 cardSection.prepend(cardItem);

 inputCardPlace.value = ''
 inputCardUrl.value = ''

 closePopup(cardPopup)
}

cardElement.addEventListener('submit', addCard)
renderCard()

/* function openPopup (evt) {
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
 */
