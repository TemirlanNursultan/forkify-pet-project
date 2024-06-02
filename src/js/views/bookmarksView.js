import View from './view';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _bookmarksButton = document.querySelector('.nav__btn--bookmarks');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => this._generateMarkupPreview(result, false))
      .join('');
  }
  addHandlerRender(handler) {
    this._bookmarksButton.addEventListener('mouseover', function (e) {
      e.preventDefault();
      handler();
    });
  }
  _generateMarkupPreview(results) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${results.id}">
          <figure class="preview__fig">
            <img src="${results.image}" alt=${results.title} />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${results.title}</h4>
            <p class="preview__publisher">${results.publisher}</p>
          </div>
        </a>
      </li>
    `;
  }
}

export default new BookmarksView();
