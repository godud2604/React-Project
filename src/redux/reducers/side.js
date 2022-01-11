import * as types from '../actions/SideTypes';

const initialState = {
  isSideBar: false,
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case types.SIDEBAR_TAB_STATUS:
      return {
        ...state,
        isSideBar: action.status,
      };
    default:
      return state;
  }
}
