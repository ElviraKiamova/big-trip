import {MOCK_POINTS} from '../mock/task-points.js';
import {MOCK_OFFERS} from '../mock/task-offers.js';
import {MOCK_DESTINATIONS} from '../mock/task-destinations.js';

function mergeDataArrays(points, offers, destinations) {
  return points.map((point) => {
    const offerType = offers.find((offer) => offer.type === point.type);
    const additionalOffers = offerType ? offerType.offers : [];
    const filteredOffersDetails = additionalOffers.filter((offerDetail) =>
      point.offers.includes(offerDetail.id)
    );

    const destination = destinations.find((dest) => dest.id === point.destination);
    const destinationDetails = destination ? { name: destination.name, description: destination.description, pictures: destination.pictures } : null;

    const { date_from: startDate, date_to: endDate, base_price: basePrice, ...rest } = point;

    return {
      ...rest,
      offers: filteredOffersDetails,
      destinationDetails,
      startDate,
      endDate,
      basePrice
    };
  });
}

const mergedData = mergeDataArrays(MOCK_POINTS, MOCK_OFFERS, MOCK_DESTINATIONS);
export default class TasksModel {
  #tasks = null;
  constructor() {
    this.#tasks = mergedData;
  }

  getTasks() {
    return this.#tasks;
  }
}
