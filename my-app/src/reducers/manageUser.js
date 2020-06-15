let user = {}
export default function manageUser(state = user, action) {
    switch(action.type) {
        case "UPDATE_USER":
            return {...state, user: action.user}
        case "ADD_ASK":
            return {...state, user: {...state.user, asks: [...state.asks, action.ask]}}
        case "DELETE_ASK":
            return {...state, user: {...state.user, asks: [state.asks.filter(ask => {ask.id !== action.askId})]}}
        case "SELECT_OFFER_FOR_ASK":
            ask = state.user.asks.filter(ask => {ask.id === action.askId}).offerId = action.offerId;
            return {...state, user: {...state.user, asks: [...state.asks, ask]}}
        case "ADD_OFFER":
            return {...state, user: {...state.user, offers: [...state.offers, action.offer]}}
        case "DELETE_OFFER":
            return {...state, user: {...state.user, offers: [state.offers.filter(offer => {offer.id !== action.askId})]}}
        default:
            return state
    }

}
