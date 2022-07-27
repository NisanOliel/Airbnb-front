import { storageService } from './async-storage.service.js'
import axios from 'axios'
import { httpService } from "./http.service"

// import ordersJason from '../../data/order.json' assert { type: 'json' }

// const KEY = 'ordersDB'
// const API = '//localhost:3030/api/order/'
// const API = process.env.NODE_ENV !== 'development' ? '/api/order/' : '//localhost:3030/api/order/'

const API = 'order'

export const orderService = {
    query,
    getById,
    remove,
    save,
    // getEmptyorder,
    getorder,
}

// _createorders()

async function query(filterBy = "") {
    // return axios.get(API, { params: filterBy }).then((res) => res.data)
    // return storageService.query(KEY)
    console.log('API:', API)
    console.log('filterBy:', filterBy)
    return await httpService.get(API, filterBy)

}

async function getById(id) {
    // return axios.get(API + id).then(res => res.data)
    // return storageService.get(KEY, id)
    return await httpService.get(`${API}/${id}`)

}

async function remove(id) {
    // return axios.delete(API + id).then(res => res.data)
    // return storageService.remove(KEY, id)
    return await httpService.delete(API, id)

}

async function save(order) {
    console.log('order service:', order)
    // if (order._id) {
    //     return axios.put(API + order._id, order).then(res => res.data)
    // } else {
    //     return axios.post(API, order).then(res => res.data)
    // }

    // const savedOrder = (order._id) ? storageService.put(KEY, order) : storageService.post(KEY, order)
    // return savedOrder
    if (order._id) {
        // return axios.put(API + order._id, order).then(res => res.data);
        return await httpService.put(API, order)

    } else {
        return await httpService.post(API, order)
        // return axios.post(API, order).then(res => res.data);
    }

}

// function getEmptyorder() {
//     return {
//         'hostId': '',
//         'createdAt': '',
//         'buyer': {
//             '_id': '',
//             'fullname': ''
//         },
//         'totalPrice': '',
//         'startDate': '',
//         'endDate': '',
//         'guests': {
//             'adults': '',
//             'children': ''
//         },
//         'stay': {
//             '_id': '',
//             'name': '',
//             'price': ''
//         },
//         'status': 'pending'
//     }
// }

function getorder(orderId) {
    return storageService.get(KEY, orderId)
}

function _createorders() {
    let orders = JSON.parse(localStorage.getItem(KEY))
    if (!orders || !orders.length) {
        localStorage.setItem(KEY, JSON.stringify(ordersJason))
    }
    return orders
}








