import { utilService } from './util.service.js';
import { storageService } from './async-storage.service.js';
import axios from 'axios';
import { httpService } from "./http.service"
import staysJason from '../../data/stay.json' assert { type: 'json' }
import labelsJason from '../../data/labels.json' assert {type: 'json'}

const KEY = 'staysDB';
// const API = '//localhost:3030/api/stay/'

// const API = process.env.NODE_ENV !== 'development' ? 'api/stay/' : 'localhost:3030/api/stay';
const API = 'stay'
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

async function query(filterBy = "") {
  return await httpService.get(API, filterBy)
  // const stays = storageService.query(KEY);
  // return await axios.get(API, { params: filterBy })
  // return filterStays(filterBy, await stays);
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



