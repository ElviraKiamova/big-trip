import {render} from './framework/render.js';
import {RenderPosition} from './render.js';
import FilterView from './view/filter-view.js';
import RoutePointView from './view/route-point-view.js';
import SortingView from './view/sorting-view.js';
import ListView from './view/list-view.js';
import ItemsPresenter from './presenter/items-presenter.js';
import NewEventView from './view/new-event-view';
import TasksModel from './model/tasks-model.js';

const siteControlsFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

render(new RoutePointView(), siteControlsFilters, RenderPosition.AFTERBEGIN);

render(new SortingView(), siteEvents);

const listView = new ListView();
render(listView, siteEvents);

const tasksModel = new TasksModel();
const itemsPresenter = new ItemsPresenter({listContainer: listView, tasksModel});
itemsPresenter.init();

const filterView = new FilterView();
render(filterView, siteControlsFilters);

const newEventButtonView = new NewEventView();

const tripFilters = document.querySelector('.trip-filters');
render(newEventButtonView, tripFilters);
