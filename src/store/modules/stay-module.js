import { stayService } from '../../services/stay.service.js';

export const stayStore = {
  state: {
    stays: [],
    filterBy: null,
    lastRemoveStay: null,
    labels: stayService.getLabels()
  },

  getters: {
    getStays({ stays }) {
      return stays;
    },

    getLabels({ labels }) {
      return labels
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
      stayService.query(filterBy).then(stays => {
        const filteredStays = stays.filter(stay => {
          return stay.name.includes(filterBy?.label);
        });
        commit({ type: 'setStays', stays: filteredStays });
        // commit({ type: 'setFilterBy', filterBy })
      })
    },
  },
};
