import { combineReducers } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    default:
      return state;
  }
}

const rootRecuders = combineReducers({
  counter
});

export default rootRecuders;
