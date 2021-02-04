import { HANDLE_COSTUMER } from '../actions';

const INITIAL_STATE = {
  name: '',
  password: '',
}

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HANDLE_COSTUMER:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default loginReducer;
