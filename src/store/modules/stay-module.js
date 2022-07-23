import { stayService } from '../../services/stay.service.js';

export const stayStore = {
  state: {
    stays: [],
    filterBy: null,
    lastRemoveStay: null,
    labels: stayService.getLabels(),
  },

  getters: {
    getStays({ stays }) {
      return stays;
    },
    getLabels({ labels }) {
      return labels
    },
    getFilteredStays({ filterBy, stays }) {
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

      return filteredStays;
    },
    chartLabel({ stays }) {
      console.log('stays', stays);
      const typeMap = {};
      stays.forEach(stay => {
        console.log('stay:', stay);
        if (!typeMap[stay.type]) {
          typeMap[stay.type] = 0;
          console.log('typeMap:', typeMap);
        }
        typeMap[stay.type]++;
      });
      return typeMap;
    },
  },

  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    removeStay(state, { stayId }) {
      const idx = state.stays.findIndex(p => p._id === stayId)
      state.lastRemovedstay = state.stays[idx];
      state.stays.splice(idx, 1);
    },
    clearRemovestay(state) {
      state.lastRemovestay = null
    },
    undoRemovestay(state) {
      state.stays.unshift(state.lastRemovestay);
      state.lastRemovestay = null;
    },
    setFilteredStays(state) {
      state.filterBy = { ...state.filterBy };
    },
    markStay(state, { stayId }) {
      const stay = state.stays.find(stay => stay._id === stayId);
      stay.inStock = !stay.inStock;
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
      })
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
      });
    },
    markStay({ commit, state }, { stayId }) {
      commit({ type: 'markStay', stayId });
      const stay = state.stays.find(stay => stay._id === stayId);
      stayService.save(stay);
    },
    getStayById(context, { stayId }) {
      return stayService.getById(stayId);
    },
    setFilterBy({ commit }, { filterBy }) {
      stayStore.state.filterBy = { ...filterBy };
    },
    filterStays(filterBy) {
      stayService.query(filterBy).then(stays => {
        // stayService.filterStays(filterBy, stays);
        commit({ type: 'setStays', stays })
      })
    },
    setFilteredStays({ commit }) {
      commit({ type: 'setFilteredStays' });
    }
  }
}
