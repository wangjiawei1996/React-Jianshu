import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
  });
  
  export default (state = defaultState,action) => {
    if (action.type === constants.SEARCH_FOCUS) {
      //immutable对象的set方法，会结合之前的immutable对象的值和设置的值返回一个全新的值
      return state.set('focused',true)
    }
    if (action.type === constants.SEARCH_BLUR) {
      return state.set('focused',false) 
    }
      return state;
  }