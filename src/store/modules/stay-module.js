import { storeKey } from 'vuex';
import { stayService } from '../../services/stay.service.js';

export const stayStore = {
  state: {
    stays: [],
    filterBy: null,
    lastRemoveStay: null,
    labels: stayService.getLabels(),
    maps: stayService.getMaps(),
    num: null,
  },

  getters: {
    getStays({ stays }) {
      return stays;
    },
    getLabels({ labels }) {
      return labels;
    },
<<<<<<< HEAD
    getFilteredStays({ filterBy, stays }) {

      const loc = filterBy?.location;
      const deepStays = JSON.parse(JSON.stringify(stays));

      const regex = new RegExp(loc, 'i');
      let filters = deepStays;
      if (loc) {
        filters = deepStays.filter(stay => regex.test(stay.address.country) || regex.test(stay.address.city));
      }
      for (let key in filterBy) {
        const value = filterBy[key];
        switch (key) {
          case 'bedrooms':
          case 'beds':
            if (value && value !== 'Any') {
              filters = filters.filter(stay => {
                return stay[key] === value;
              });
              break;
            }
          case 'price':
            if (value) {
              const { minPrice, maxPrice } = value;
              filters = filters.filter(stay => {
                return stay.price >= minPrice && stay.price <= maxPrice;
              });
            }
            break;
          case 'propertyType':
            if (value.length > 0) {
              filters = filters.filter(stay => value.includes(stay.propertyType))
            }
            break;
          case 'label':
            if (value) {
              const filteredStays = filters.filter(stay => stay.propertyType.includes(value));
              filters = filteredStays.length === 0 ? stays : filteredStays;
            }
            break;
          case 'amenities':
            console.log(value);
            if (value.length > 0) {
              filters = filters.filter(stay => {
                return stay.amenities.find(amenity => value.includes(amenity.name));
              });
            }
            break;
          case 'hostLanguage':
            if (value.length > 0) {
              filters = filters.filter(stay => value.includes(stay.host.hostLanguage));
            }
            break;
          default:
            break;
        }
      }
      return filters;
=======
    getMaps({ maps }) {
      return maps;
>>>>>>> 8dd1448415f9c0862fa5f591eb4dda038ea1c79b
    },
    // getFilteredStays({ filterBy, stays }) {
    //   const loc = filterBy?.location;
    //   console.log('loc', loc);
    //   const deepStays = JSON.parse(JSON.stringify(stays));

    //   const regex = new RegExp(loc, 'i');
    //   let filters = deepStays;
    //   if (loc) {
    //     console.log('regex', loc);
    //     filters = deepStays.filter(stay => regex.test(stay.address.country) || regex.test(stay.address.city));
    //   }
    //   for (let key in filterBy) {
    //     const value = filterBy[key];
    //     switch (key) {
    //       case 'bedrooms':
    //       case 'beds':
    //         if (value && value !== 'Any') {
    //           filters = filters.filter(stay => {
    //             return stay[key] === value;
    //           });
    //           break;
    //         }
    //       case 'price':
    //         if (value) {
    //           const { minPrice, maxPrice } = value;
    //           filters = filters.filter(stay => {
    //             return stay.price >= minPrice && stay.price <= maxPrice;
    //           });
    //         }
    //         break;
    //       case 'propertyType':
    //         if (value.length > 0) {
    //           filters = filters.filter(stay => value.includes(stay.propertyType));
    //         }
    //         break;
    //       case 'label':
    //         if (value) {
    //           const filteredStays = filters.filter(stay => stay.propertyType.includes(value));
    //           filters = filteredStays.length === 0 ? stays : filteredStays;
    //         }
    //         break;
    //       case 'amenities':
    //         if (value.length > 0) {
    //           filters = filters.filter(stay => {
    //             return stay.amenities.find(amenity => value.includes(amenity.name));
    //           });
    //         }
    //         break;
    //       case 'hostLanguage':
    //         if (value.length > 0) {
    //           filters = filters.filter(stay => value.includes(stay.host.hostLanguage));
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    //   console.log('filters getters', filters);
    //   return filters;
    // },

    getHostOrders({ stays }) {
      return stays.filter(order => order.hostId === this.$store.getters.loggedinUser._id);
    },
  },

  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    removeStay(state, { stayId }) {
      const idx = state.stays.findIndex(p => p._id === stayId);
      state.lastRemovedstay = state.stays[idx];
      state.stays.splice(idx, 1);
    },
    clearRemovestay(state) {
      state.lastRemovestay = null;
    },
    undoRemovestay(state) {
      state.stays.unshift(state.lastRemovestay);
      state.lastRemovestay = null;
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    setFilteredStays(state) {
      state.filterBy = { ...state.filterBy };
    },

    addStay(state, { stay }) {
      state.stays.push(stay);
    },

    updateStay(state, { stay }) {
      const idx = state.stays.findIndex(p => p._id === stay._id);
      state.stays.splice(idx, 1, stay);
    },
  },
  actions: {
    loadStays({ commit }) {
      stayService.query().then(stays => {
        commit({ type: 'setStays', stays });
      });
    },

    removeStay({ commit }, payload) {
      commit(payload);
      return stayService
        .remove(payload.stayId)
        .then(() => {
          commit({ type: 'clearRemovestay' });
        })
        .catch(err => {
          commit({ type: 'undoRemovestay' });
          throw err;
        });
    },
    saveStay({ commit }, { stay }) {
      const actionType = stay._id ? 'updateStay' : 'addStay';
      return stayService.save(stay).then(savedStay => {
        commit({ type: actionType, stay: savedStay });
        return savedStay;
      })
    },
    getStayById(context, { stayId }) {
      return stayService.getById(stayId);
    },
    // setFilterBy({ commit }, { filterBy }) {
    //   commit({ type: 'setFilterBy', filterBy });
    // },

    async setFilterBy({ commit }, { filterBy }) {
      const stays = await stayService.query(filterBy);
      commit({ type: 'setStays', stays });
    },

    setFilteredStays({ commit }) {
      commit({ type: 'setFilteredStays' });
    },
  }
}
