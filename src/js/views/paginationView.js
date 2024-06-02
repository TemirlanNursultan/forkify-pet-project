import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      let pagButton = e.target.closest('.btn--inline');
      let goToPage = parseInt(pagButton.dataset.gotopage);
      handler(goToPage);
    });
  }
  _generateMarkup() {
    let numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (parseInt(this._data.page) === 1) {
      return `<button class="btn--inline pagination__btn--next" data-goToPage = "${
        parseInt(this._data.page) + 1
      }">
    <span>Page ${parseInt(this._data.page) + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>`;
    }

    if (parseInt(this._data.page) > 1 && parseInt(this._data.page) < numPages) {
      return `<button class="btn--inline pagination__btn--prev" data-goToPage ="${
        parseInt(this._data.page) - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${parseInt(this._data.page) - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next" data-goToPage ="${
        parseInt(this._data.page) + 1
      }">
      <span>Page ${parseInt(this._data.page) + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>`;
    }
    if (parseInt(this._data.page) === numPages) {
      return `<button class="btn--inline pagination__btn--prev" data-goToPage = "${
        parseInt(this._data.page) - 1
      }">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${parseInt(this._data.page) - 1}</span>
        </button>`;
    }
    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
