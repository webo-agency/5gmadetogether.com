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

    data.head_tags_title = new Array();
    data.head_tags_link = new Array();
    data.head_tags_script = new Array();
    data.head_tags_meta = new Array();

    data.head_tags.forEach(
      function(item){
        switch(item['tag']){
          case 'title':
            data.head_tags_title.push(item.content);
            break;
          case 'link':
            data.head_tags_link.push(item.attributes);
            break;
          case 'script':
            item.attributes.content = item.content;
            data.head_tags_script.push(item.attributes);
            break;
          case 'meta':
            data.head_tags_meta.push(item.attributes);
            break;
        }
      });
    
    let tmpDataPage = data;
    let dataACF = data.acf;
    
    let tmpData = {
      ...tmpDataPage,
      ...dataACF
    };

    delete tmpData.acf;

    Object.assign($state, tmpData);
}};

export const getters = {
  getData: ($state) => {
    return $state
  }
}

export const actions = {}
