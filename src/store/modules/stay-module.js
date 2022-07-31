import { storeKey } from 'vuex';
import { stayService } from '../../services/stay.service.js';

export const stayStore = {
  state: {
    stays: [],
    filterBy: null,
    lastRemoveStay: null,
    labels: stayService.getLabels(),
    maps: stayService.getMaps(),
  },

  getters: {
    getStays({ stays }) {
      return stays;
    },
    getLabels({ labels }) {
      return labels;
    },

    getMaps({ maps }) {
      return maps;
    },

    // getHostOrders({ stays }) {
    //   return stays.filter(order => order.hostId === this.$store.getters.loggedinUser._id);
    // },
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

    updateStay(state, { stay }) {
      const idx = state.stays.findIndex(p => p._id === stay._id);
      state.stays.splice(idx, 1, stay);
    },
  },

  actions: {
    async loadStays({ commit }) {
      try {
        const stays = await stayService.query();
        commit({ type: 'setStays', stays });
      } catch (error) {
        throw error;
      }
    },

    async removeStay({ commit }, payload) {
      try {
        await stayService.remove(payload.stayId);
        commit({ type: 'clearRemovestay' });
      } catch (error) {
        commit({ type: 'undoRemovestay' });
        throw error;
      }
      // commit(payload);
      // return stayService
      //   .remove(payload.stayId)
      //   .then(() => {
      //     commit({ type: 'clearRemovestay' });
      //   })
      //   .catch(err => {
      //     commit({ type: 'undoRemovestay' });
      //     throw err;
      //   });
    },
    saveStay({ commit }, { stay }) {
      const actionType = stay._id ? 'updateStay' : 'addStay';
      return stayService.save(stay).then(savedStay => {
        commit({ type: actionType, stay: savedStay });
        return savedStay;
      });
    },
    getStayById(context, { stayId }) {
      return stayService.getById(stayId);
    },

    async setFilterBy({ commit }, { filterBy }) {
      console.log('filter by', { filterBy });
      const stays = await stayService.query(filterBy);
      console.log(stays);
      commit({ type: 'setStays', stays });
    },

    setFilteredStays({ commit }) {
      commit({ type: 'setFilteredStays' });
    },
  },
};
