import { GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "./ActionType"



const initialState = {
    users : [],
    loading: false,
    error: null
}

export const AllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return {
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case GET_ALL_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}