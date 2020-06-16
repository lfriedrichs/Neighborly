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
  