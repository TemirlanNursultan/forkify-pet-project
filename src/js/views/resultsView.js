import icons from '../../img/icons.svg';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
  _generateMarkup() {
    return this._data.map(rec => this._generateMarkupPreview(rec)).join('');
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

export default new ResultsView();
