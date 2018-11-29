import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 1
  });
  
  export default (state = defaultState,action) => {
    switch(action.type) {
      
      default:
        return state;
    }
  }