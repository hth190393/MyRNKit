import { combineReducers } from 'redux';
import { navReducer } from './AppState';

const s = (state = { t: 'ttt' }, action = {}) => {
  switch (action.type) {
    case 'test': {
      // return {}
      return { ...state, ...action.payload }
    }
    default:
      return state;
  }
};

export default combineReducers({
  s,
  nav: navReducer,
});
