import React from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';

function Loading(props) {
    if (props.loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>LOADING</h1>
            </div>
        )
    }
    else {
        return null
    }
}

const mapStateToProps = (state) => ({ loading: state.loading })


export default connect(mapStateToProps, null)(Loading)