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
  hero_background: {
    url : ''
  },
  section_count_block_first: {
    block_first_count: 0,
    block_first_count_prefix: '',
    block_first_description: ''
  },
  section_count_block_second: {
    block_second_count: 0,
    block_second_count_prefix: '',
    block_second_description: ''
  },
  section_count_block_third: {
    block_third_count: 0,
    block_third_count_prefix: '',
    block_third_description: ''
  },
});

export const mutations = {
  save($state, data) {
    filterData(data);

    data.head_tags_link = new Array();
    data.head_tags_script = new Array();
    data.head_tags_meta = new Array();

    data.head_tags.forEach(
      function(item){
        switch(item['tag']){
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
