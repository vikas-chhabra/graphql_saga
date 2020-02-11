import { GET_COMPANIES_PENDING, GET_COMPANIES_FULLFILLED} from '../actions/types'

let initialState = {
    loading: false,
    data: []
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case GET_COMPANIES_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_COMPANIES_FULLFILLED:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}