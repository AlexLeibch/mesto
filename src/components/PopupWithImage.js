import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor(popupSelector, imageSelector, titleSelector) {
        super(popupSelector)
        this._image = this._popupSelector.querySelector(imageSelector);
        this._title = this._popupSelector.querySelector(titleSelector);
    }

    open(title, link) {
        this._image.alt = title
        this._image.src = link
        this._title.textContent = title
        super.open()
    }
}