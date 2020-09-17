import { PRESS_BUTTON, PRESS_EQUALS } from "../actions/index";

const INITIAL_STATE = { screen: "", history: [] };
const calculator = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRESS_BUTTON:
      return {
        ...state,
        screen: state.screen + "" + action.value,
      };
    case PRESS_EQUALS:
      const newState = { ...state };
      newState.screen = eval(state.screen);
      newState.history = state.history.concat(`${state.screen}`);
      return newState;
  }
};

export default calculator;
