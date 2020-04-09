import { LOGIN, LOGOUT, IS_LOADING, IS_ERROR } from "../types/userTypes"

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload }

        case LOGOUT:
            return { ...state, user: null }

        case IS_LOADING:
            return { ...state, isLoading: action.payload }

        case IS_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;

    }
}