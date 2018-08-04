import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    importData:[],
    paramsHeader:[],
    paramsDetail:[],
  },
  mutations:{
    SET_IMPORT_DATA(state, payload){
      state.importData = payload;
    },
    SET_PARAMS(state, payload){
      const header = payload[0]; // 头部
      header[0] = 'name';
      state.paramsHeader = header;
      state.paramsDetail = [];
      for (let i = 1; i < payload.length; i++) {
        let item = payload[i];
        let temp = {};
        for (let j = 0; j < item.length; j++) {
          temp[header[j]] = item[j];
        }
        state.paramsDetail.push(temp);
      }
    }
  },
  actions:{
    _setParams(context, payload){
      context.commit('SET_PARAMS', payload);
      context.commit('SET_IMPORT_DATA', payload);
    }
  }
});
