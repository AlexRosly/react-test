import { createStore } from "redux";

const defaultState = {
  isActive: false,
};

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "PRESS_BNT":
      return { ...state, isActive: (state.isActive = true) };
    case "MOUSE_OVER":
      return { ...state, isActive: (state.isActive = true) };
    case "MOUSE_LEAVE":
      return { ...state, isActive: (state.isActive = false) };

    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
