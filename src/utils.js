import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const FULL_DATE_FORMAT = 'YYYY-MM-DD';
const FULL_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
const MINUTES_PER_HOUR = 60;

dayjs.extend(utc);

function showFullDate(dueDate) {
  return dueDate ? dayjs.utc(dueDate).format(FULL_DATE_FORMAT) : '';
}

function showFullDateTime(dueDate) {
  return dueDate ? dayjs.utc(dueDate).format(FULL_DATE_TIME_FORMAT) : '';
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs.utc(dueDate).format(DATE_FORMAT) : '';
}

function showTripDuration(dueDate) {
  return dueDate ? dayjs.utc(dueDate).format(TIME_FORMAT) : '';
}

function calculateTripDuration(start, end) {
  const duration = dayjs(end).diff(dayjs(start), 'minute');
  const hours = Math.floor(duration / MINUTES_PER_HOUR);
  const minutes = duration % MINUTES_PER_HOUR;
  return `${hours}H ${minutes}M`;
}

export {humanizeTaskDueDate, showTripDuration, calculateTripDuration, showFullDate, showFullDateTime};
