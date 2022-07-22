import { storageService } from './async-storage.service.js'
import axios from 'axios'

import ordersJason from '../../data/order.json' assert { type: 'json' }

const KEY = 'ordersDB'
// const API = '//localhost:3030/api/order/'

const API = process.env.NODE_ENV !== 'development' ? '/api/order/' : '//localhost:3030/api/order/'

export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyorder,
    getorder,
}

_createorders()

function query(filterBy) {
    // return axios.get(API, { params: filterBy }).then((res) => res.data)
    return storageService.query(KEY)
}

function getById(id) {
    // return axios.get(API + id).then(res => res.data)
    return storageService.get(KEY, id)
}

function remove(id) {
    // return axios.delete(API + id).then(res => res.data)
    return storageService.remove(KEY, id)
}

function save(order) {
    // if (order._id) {
    //     return axios.put(API + order._id, order).then(res => res.data)
    // } else {
    //     return axios.post(API, order).then(res => res.data)
    // }

    const savedOrder = (order._id) ? storageService.put(KEY, order) : storageService.post(KEY, order)
    return savedOrder
}

function getEmptyorder() {
    return {
        'hostId': '',
        'createdAt': '',
        'buyer': {
            '_id': '',
            'fullname': ''
        },
        'totalPrice': '',
        'startDate': '',
        'endDate': '',
        'guests': {
            'adults': '',
            'children': ''
        },
        'stay': {
            '_id': '',
            'name': '',
            'price': ''
        },
        'status': 'pending'
    }
}

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








