import { utilService } from "./util.service.js"
import { storageService } from './async-storage.service.js'
import axios from 'axios'

const KEY = 'staysDB'
// const API = '//localhost:3030/api/stay/'

const API = (process.env.NODE_ENV !== 'development')
    ? '/api/stay/'
    : '//localhost:3030/api/stay/';


export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptystay,
    getstay,
}

// _createstays()

function query(filterBy) {
    return axios.get(API, { params: filterBy }).then((res) => res.data)

    // return storageService.query(KEY)
}

function getById(id) {
    return axios.get(API + id).then((res) => res.data);
    // return storageService.get(KEY, id)
}

function remove(id) {
    return axios.delete(API + id).then((res) => res.data);
    // return storageService.remove(KEY, id)
}

function save(stay) {
    if (stay._id) {
        return axios.put(API + stay._id, stay).then((res) => res.data);
    } else {
        return axios.post(API, stay).then((res) => res.data);
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
    }
}

function getstay(stayId) {
    return storageService.get(KEY, stayId)
}


// function _createstays() {
//     var stays = JSON.parse(localStorage.getItem(KEY))
//     if (!stays || !stays.length) {
//         stays = [
//             {
//                 _id: utilService.makeId(),
//                 name: 'avi',
//                 price: 123,
//                 labels: ["Doll", "Battery Powered", "Baby"],
//                 createdAt: Date.now() - 1000 * 50 * 5,
//                 inStock: false
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'moshe',
//                 price: 22,
//                 labels: ["Doll", "Battery Powered", "Baby"],
//                 createdAt: Date.now() - 1000 * 50 * 5,
//                 inStock: false
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'kaka',
//                 price: 33,
//                 labels: ["Doll", "Battery Powered", "Baby"],
//                 createdAt: Date.now() - 1000 * 50 * 5,
//                 inStock: true
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'shimon',
//                 price: 123,
//                 labels: ["Doll", "Battery Powered", "Baby"],
//                 createdAt: Date.now() - 1000 * 50 * 5,
//                 inStock: true
//             },

//         ]
//         localStorage.setItem(KEY, JSON.stringify(stays))
//     }
//     return stays;
// }