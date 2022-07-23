import { utilService } from './util.service.js';
import { storageService } from './async-storage.service.js';
import axios from 'axios';

import staysJason from '../../data/stay.json' assert { type: 'json' }
import labelsJason from '../../data/labels.json' assert {type: 'json'}

const KEY = 'staysDB';
// const API = '//localhost:3030/api/stay/'

const API = process.env.NODE_ENV !== 'development' ? '/api/stay/' : '//localhost:3030/api/stay/';

export const stayService = {
  query,
  getById,
  remove,
  save,
  getEmptystay,
  getstay,
  getLabels,
  filterStays
}

_createstays()

async function query(filterBy) {
  const stays = storageService.query(KEY);

  // return axios.get(API, { params: filterBy }).then((res) => res.data)
  return filterStays(filterBy, await stays);
}

function getById(id) {
  // return axios.get(API + id).then(res => res.data);
  return storageService.get(KEY, id)
}

function remove(id) {
  // return axios.delete(API + id).then(res => res.data);
  return storageService.remove(KEY, id)
}

function save(stay) {
  if (stay._id) {
    return axios.put(API + stay._id, stay).then(res => res.data);
  } else {
    return axios.post(API, stay).then(res => res.data);
  }

  // const savedStay = (stay._id) ? storageService.put(KEY, stay) : storageService.post(KEY, stay)
  // return savedStay
}

function getEmptystay() {
  return {
    _id: '',
    name: '',
    price: '',
    labels: '',
    createdAt: Date.now(),
    inStock: false,
    reviews: ['review 1 best 1', 'review 2 almost 1', 'review 3 far from 1'],
  };
}

function getstay(stayId) {
  return storageService.get(KEY, stayId);
}

function _createstays() {
  let stays = JSON.parse(localStorage.getItem(KEY))
  if (!stays || !stays.length) {
    localStorage.setItem(KEY, JSON.stringify(staysJason))
  }
  return stays;
}

function getLabels() {
  return labelsJason
}

function filterStays(filterBy, stays) {
  let filteredStays = stays;
  for (const key in filterBy) {
    const value = filterBy[key];
    switch (key) {
      case 'bedrooms':
      case 'beds':
        if (value && value !== 'Any') {
          filteredStays = stays && filteredStays.filter(stay => {
            return stay[key] === Number(value)
          })
        }
        break;
      case 'price':
        if (value) {
          const { minPrice, maxPrice } = value;
          filteredStays = filteredStays.filter(stay => {
            return stay.price >= Number(minPrice) && stay.price <= Number(maxPrice)
          })
        }
        break;
      case 'propertyType':
        if (value) {
          filteredStays = filteredStays.filter(stay => {
            return stay.propertyType.includes(value)
          })
        }
        break;
      case 'amenities':
        if (value.length > 0) {
          filteredStays = filteredStays.filter(stay => {
            return stay.amenities.find(amenity => value.includes(amenity.name));
          })
        }
        break;
      default:
        break;
    }
  }

  return filteredStays
}
