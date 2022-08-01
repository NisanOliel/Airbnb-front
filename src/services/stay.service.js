import { storageService } from './async-storage.service.js';

import { httpService } from './http.service';
import labelsJason from '../assets/data/labels.json' assert { type: 'json' };
import mapJason from '../assets/data/location.json' assert { type: 'json' };

const KEY = 'staysDB';

const API = 'stay';
export const stayService = {
  query,
  getById,
  remove,
  save,

  getstay,
  getLabels,
  getMaps,
  debounce,
};

async function query(filterBy = null) {
  return await httpService.get(API, filterBy);
}

async function getById(id) {
  return await httpService.get(`${API}/${id}`);
}

async function remove(id) {
  return await httpService.delete(API, id);
}

async function save(stay) {
  if (stay._id) {
    return await httpService.put(API, stay);
  } else {
    return await httpService.post(API, stay);
  }
}

function getstay(stayId) {
  return storageService.get(KEY, stayId);
}

function getLabels() {
  return labelsJason;
}
function getMaps() {
  return mapJason;
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
