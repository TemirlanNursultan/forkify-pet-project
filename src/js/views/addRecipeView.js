import icons from '../../img/icons.svg';
import fracty from 'fracty';
import View from './view';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.nav__btn--add-recipe');
  _recipeWindow = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _closeButton = document.querySelector('.btn--close-modal');
  _uploadBtn = document.querySelector('.btn upload__btn');
  _form = document.querySelector('.upload');
  _errorMessage = 'We could not find that recipe. Please try another one!';

  _message = 'Recipe was successfully uploaded :)';

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', () => {
      this._recipeWindow.classList.toggle('hidden');
      this._overlay.classList.toggle('hidden');
      handler();
    });
    this._closeButton.addEventListener('click', () => {
      this._recipeWindow.classList.toggle('hidden');
      this._overlay.classList.toggle('hidden');
      handler();
    });
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._recipeWindow.classList.toggle('hidden');
  }
  addNewRecipeHandler(handler) {
    this._recipeWindow.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return ``;
  }
  addHandlerUpdateServings(handler) {
    handler(updateTo);
  }
}

export default new AddRecipeView();
