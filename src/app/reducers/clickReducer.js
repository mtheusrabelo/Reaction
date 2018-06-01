import * as constants from '../constants';

const clickReducer = (state = 0, action) => {
    switch (action.type) {
    case constants.ADD_CLICK:
        return state + 1;
    default:
        return state;
    }
};

export default clickReducer;
