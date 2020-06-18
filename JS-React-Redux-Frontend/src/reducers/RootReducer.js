import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import manageUser from './manageUser';

const rootReducer = combineReducers({
  authentication,
  manageUser
});

export default rootReducer;