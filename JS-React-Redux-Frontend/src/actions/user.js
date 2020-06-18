import { userConstants } from '../constants/UserConstants';
import { userService } from '../services/UserService';

export const addAsk = (ask) => {
    return {
      type: 'ADD_ASK',
      ask
    };
  };
  
  export const addOffer = (offer) => {
    return {
      type: 'ADD_OFFER',
      offer
    };
  };
  
  export const deleteAsk = (askId) => {
    return {
      type: 'ADD_ASK',
      askId
    };
  };
  
  export const deleteOffer = (offerId) => {
    return {
      type: 'DELETE_OFFER',
      offerId
    };
  };

  export const selectOffer = (ask, offerId) => {
    return {
      type: '"SELECT_OFFER_FOR_ASK"',
      ask,
      offerId
    };
  };

  export const updateUser = (user) => {
    return {
      type: '"SELECT_OFFER_FOR_ASK"',
      user
    };
  };

export const authActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        return userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    return true

                },
                error => {
                    dispatch(failure(error));
                    return false
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}



   