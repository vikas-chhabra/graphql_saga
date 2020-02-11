import {put, takeLatest, all} from 'redux-saga/effects'
import { GET_COMPANIES_FULLFILLED, GET_COMPANIES_PENDING } from '../actions/types';
import {client} from '../config';
import { gql } from 'apollo-boost';

function* fetchCompanyDetails(body){
    debugger
    var data;
    const json = client.query({
        query: gql`${body.query}`
    }).then((response)=>{
         console.log(response)
    })

    yield put({ type: GET_COMPANIES_FULLFILLED, payload: data, });
}

function* actionWatcher() {
    yield takeLatest(GET_COMPANIES_PENDING, fetchCompanyDetails)
}

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }