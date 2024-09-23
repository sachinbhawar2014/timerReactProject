// add counter action creators imports here
import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../actions/counterActions";
const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: ++state.count };
        case DECREMENT_COUNTER:
            return { ...state, count: --state.count };
        case RESET_COUNTER:
            return { ...state, count: 0 };
        default:
            return state;
    }
};
