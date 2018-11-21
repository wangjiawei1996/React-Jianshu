import * as constants from './constants';
import axios from 'axios';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
    }).catch(() => {
      console.log('error');
    })
  }
}