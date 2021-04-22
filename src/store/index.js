import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      data: {},
      // dataStore: {}, //?
      itemsOnPage: [],
      itemsInCart: [],
   },
   mutations: {
      setData(state, payload) {
         state.data = { ...state.data, ...payload.newData };   
         state.itemsOnPage.push(...Object.keys(payload.newData));
      },
      addItemToBasket(state, id) {
         // state.itemsInCart.push(...Object.keys(id.newData)); //?
         state.itemsInCart = (Object.keys(id.newData)); //?
         // state.itemsInCart.push(...Object.keys(payload.newData));
      },
   },
   getters: {
      getData: state => state.data,
      // getDataStore: state => state.dataStore, //?
      getItemsOnPage: state => state.itemsOnPage,
      getItemsInCart: state => state.itemsInCart,
   },
   actions: {
      requestData ({ commit, state }, page) {
         fetch(`/itemslist/${page}`, {
            method: 'GET',
         })      
            .then(res => {
               console.log(res, 'requestData then1')
               return res.json();
            })
            .then(res => {
               commit('setData', { newData: res });
            })
      },

      basketData ({ commit, state }) {
         fetch('/basketlist', {
            method: 'GET',
         })      
            .then(res => {
               console.log(res, 'basketdata then1')
               return res.json();
            })
            .then(res => {
               console.log({ newData: res }, 'basketData')
               commit('addItemToBasket', { newData: res });
            })
      },

      // addItem({commit}, id) {
      //    console.log(id, 'additem index.js')
      //    commit('add', id);
      // },

      // addItem({commit, state}, id) {
      //    fetch(`/itemslist`, {
      //       method: 'GET',
      //    })      
      //       .then(res => {
      //          return res.json();
      //       })
      //       .then(res => {
      //          commit('add', id);
      //       })
      // },

   

      addToBasketItem({ commit }, data) {
         console.log(data, 'index.js')
         fetch('/basketlist', {
            method: 'POST',
            body: JSON.stringify(data),
            // body: JSON.parse(JSON.stringify(data)),
            // body: data,
            headers: {
               'Content-Type': 'application/json'
            }
         })
         .then(res => {
            console.log(res, 'addToBasketItem1')
            return res.json();
         })
         .then(res => {
            console.log(res, 'addToBasketItem2')
            commit("addItemToBasket",  { newData: res }) //?
         })
      },



      adminAddItem({}, data) {
         console.log(data, 'adminAddItem')
         fetch('/itemslist', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               'Content-Type':'application/json'
            }
         })
         .then(res => {
            return res.json();
         })
         .then(res => {
            console.log(res)
         })
      }
   }  
   
});   