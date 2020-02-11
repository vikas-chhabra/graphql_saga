import {GET_COMPANIES_PENDING} from './types'

export const fetchCompanies =(query)=>({
    type: GET_COMPANIES_PENDING,
    query
})