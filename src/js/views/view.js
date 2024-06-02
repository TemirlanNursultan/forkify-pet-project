import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    const markUp = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
  renderSpinner() {
    const markUp = `
      <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
  
      </div>`;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
  renderError(message = this._errorMessage) {
    const markUp = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
