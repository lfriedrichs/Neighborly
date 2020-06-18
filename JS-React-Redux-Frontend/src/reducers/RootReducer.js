import { combineReducers } from 'redux';

import { authentication } from './AuthentificationReducer';
import manageUser from './manageUser';

const rootReducer = combineReducers({
  authentication,
  manageUser
});

export default rootReducer;