import {
  isEmpty as _isEmpty
} from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}'];

const filterData = obj => {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] == 'string'){
      obj[key] = obj[key].replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/sg, "");
    }

    if (
      _isEmpty(key) ||
      RegExp(filterWords.join('|')).test(key) ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) { delete obj[key] } // delete
    else if (obj[key] && typeof obj[key] === "object") filterData(obj[key]); // recurse
  });
};

export const state = () => ({

});

export const mutations = {
  save($state, data) {
    filterData(data);
    
    let _tmpData = data.acf;

    Object.assign($state, _tmpData);
}};

export const getters = {
  getData: ($state) => {
    return $state
  }
}

export const actions = {}
