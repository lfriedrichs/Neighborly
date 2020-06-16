
export default function manageUser(state = {user: {id: '', token: "", asks: [""], offers: [""]}}, action) {
    switch(action.type) {
        case "UPDATE_USER":
            return {...state, user: action.user}
        case "ADD_ASK":
            return {...state, user: {...state.user, asks: [...state.asks, action.ask]}}
        case "DELETE_ASK":
            let asks = state.user.asks.filter(ask => ask.id !== action.askId)
            return {...state, user: {...state.user, asks: asks}}
        case "SELECT_OFFER_FOR_ASK":
            let ask = state.user.asks.filter(ask => ask.id === action.askId)
            ask.offerId = action.offerId;
            return {...state, user: {...state.user, asks: [...state.asks, ask]}}
        case "ADD_OFFER":
            return {...state, user: {...state.user, offers: [...state.offers, action.offer]}}
        case "DELETE_OFFER":
            let offers = state.offers.filter(offer => offer.id !== action.askId)
            return {...state, user: {...state.user, offers: offers}}
        default:
            return state
    }

}
