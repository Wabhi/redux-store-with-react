import { ActionTypes } from "../Constants/actionTypes";

const initialState = {
    products: []
}
export const productReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state,products:payload};
            break;
        default:
            return state;
            break;
    }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
            break;
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}