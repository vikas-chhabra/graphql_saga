import React from 'react';
import { fetchCompanies } from '../actions'
import { connect } from 'react-redux'

function Button(props) {
    let query = `{
        allCompanies{
          name,
          id,
          employees{
            firstName
          },
        }
      }`
    return (
        <button onClick={() => { props.getCompanyDetails(query) }}>Fetch Details Now</button>
    )
}

const mapDispatchToProps=dispatch=>({
    getCompanyDetails: (body)=>dispatch(fetchCompanies(body))
})
export default connect(null, mapDispatchToProps)(Button)