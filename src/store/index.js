import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      data: {},
      itemsOnPage: [],
      itemsInCart: [],
   },
   mutations: {
      setData(state, payload) {
         state.data = payload.newData;
         state.itemsOnPage = Object.keys(payload.newData)
      },
      add(state, id) {
         state.itemsInCart.push(id)
      },
   },
   getters: {
      getData: state => state.data,
      getItemsOmPage: state => state.itemsOnPage,
      // getFullPrice: state => {
      //    const keys = state.itemsOnPage;
      //    return keys.reduce((res, cur) => res + state.Data[cur].price, 0)
      // },
      getItemsInCart: state => state.itemsInCart,
   },
   actions: {
      requestData ({ commit, state }, page) {
         fetch(`/database/items${page}.json`)
            .then(res => {
               return res.json();
            })
            .then(res => {
               commit('setData', { newData: res });
            })
      },

      addItem({commit}, id) {
         commit('add', id);
      }
   }  
   
});   