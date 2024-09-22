import ItemView from '../view/item-view.js';
import {render} from '../framework/render.js';

export default class ItemsPresenter {
  #listContainer = null;
  #tasksModel = null;
  #tasks = [];
  constructor({listContainer, tasksModel}) {
    this.#listContainer = listContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#tasks = [...this.#tasksModel.getTasks()];
    for (let i = 0; i < this.#tasks.length; i++) {
      this.#renderTask(this.#tasks[i]);
    }
  }

  #renderTask(task) {
    const taskComponent = new ItemView({task});
    render(taskComponent, this.#listContainer.element);
  }
}
