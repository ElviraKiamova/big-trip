import {createElement} from '../render.js';
import {humanizeTaskDueDate, showTripDuration, calculateTripDuration, showFullDate, showFullDateTime} from '../utils.js';

function creationAdditionalServices(offers) {
  return offers.map((element) =>
    `<li class="event__offer">
      <span class="event__offer-title">${element.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${element.price}</span>
    </li>`
  ).join('');
}


function createItem(task) {
  const {type, destinationDetails, startDate, endDate, basePrice, offers} = task;
  return (
    `<li class="trip-events__item">
      <div class="event">
        ${humanizeTaskDueDate(startDate) ?
      `<time class="event__date" datetime="${showFullDate(startDate)}">${humanizeTaskDueDate(startDate)}</time>`
      : ''}
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destinationDetails.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${showFullDateTime(startDate)}">${showTripDuration(startDate)}</time>
            &mdash;
            <time class="event__end-time" datetime="${showFullDateTime(endDate)}">${showTripDuration(endDate)}</time>
          </p>
          <p class="event__duration">${calculateTripDuration(startDate, endDate)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${creationAdditionalServices(offers)}
        </ul>
        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class ItemView {
  constructor({task}) {
    this.task = task;
  }

  getTemplate() {
    return createItem(this.task);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
