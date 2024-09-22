import ItemView from '../view/item-view.js';
import {render} from '../framework/render.js';

export default class ItemsPresenter {
  constructor({listContainer, tasksModel}) {
    this.listContainer = listContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    this.tasks = [...this.tasksModel.getTasks()];
    for (let i = 0; i < this.tasks.length; i++) {
      render(new ItemView({task: this.tasks[i]}), this.listContainer.element);
    }
  }
}
