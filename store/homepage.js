// import {
//   isEmpty as _isEmpty
// } from 'lodash'

// const filterWords = ['yoast_head', 'meta', '{}'];

// const filterData = obj => {
//   Object.keys(obj).forEach(key => {
//     if(typeof obj[key] == 'string'){
//       obj[key] = obj[key].replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/sg, "");
//     }

//     if (
//       _isEmpty(key) ||
//       RegExp(filterWords.join('|')).test(key) ||
//       obj[key] == null ||
//       typeof obj[key] == 'undefined' ||
//       (Array.isArray(obj[key]) && !obj[key].length) ||
//       obj[key] == '' ||
//       obj[key] == []
//     ) { delete obj[key] } // delete
//     else if (obj[key] && typeof obj[key] === "object") filterData(obj[key]); // recurse
//   });
// };

export const state = () => ({
  
});

// export const mutations = {
//   save($state, data) {
//     filterData(data);
    
//     let _tmpData = data.acf;

//     Object.assign(_tmpData, _tmpData.brands_slajder.forEach((item, index) => {
//       _tmpData.brands_slajder[index] = item.acf;
//     }));

//     Object.assign(_tmpData, _tmpData.company_promoted.forEach((item, index) => {
//       _tmpData.company_promoted[index] = item.acf;
//     }));

//     Object.assign(_tmpData, _tmpData.company_promoted.forEach((item, index) => {
//       _tmpData.company_promoted[index] = item.homepage;
//     }));

//     Object.assign(_tmpData, _tmpData.projects_carousel.forEach((item, index) => {
//       _tmpData.projects_carousel[index] = item.acf;
//     }));

//     Object.assign(_tmpData, _tmpData.reviews_promoted.forEach((item, index) => {
//       _tmpData.reviews_promoted[index] = item.acf;
//     }));

//     Object.assign(_tmpData, _tmpData.services_promoted.forEach((item, index) => {
//       _tmpData.services_promoted[index] = item.acf.homepage;
//     }));

//     Object.assign(_tmpData, _tmpData.technology_promoted_list.forEach((item, index) => {
//       _tmpData.technology_promoted_list[index] = item.acf;
//     }));


//     Object.assign(_tmpData.services_promoted_single, _tmpData.services_promoted_single.homepage);
    
//     Object.assign(_tmpData.company_promoted_single, _tmpData.company_promoted_single.homepage);

//     Object.assign($state, _tmpData);
//   },
  
//   saveTechnology($state, data) {
//     filterData(data);
//     let _tmpData = data;

//     Object.assign(_tmpData, _tmpData.forEach((item, index) => {
//       delete _tmpData[index].yoast_head;
//     }));

//     Object.assign($state.technologies, _tmpData);
//   }
// };

export const getters = {
  getStoreData: ($state) => {
    return $state
  }
}

export const actions = {}
