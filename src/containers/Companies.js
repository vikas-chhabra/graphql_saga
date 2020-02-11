import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';

function Companies(props) {

    const GET_COMPANIES = gql`
    {
        allCompanies{
          name,
          id,
          employees{
            firstName
          },
        }
      }
    `
      console.log(useQuery(GET_COMPANIES))
    return (
        <div>
            <h3>Syal Marriage Beureo</h3>
            <h5>Employees</h5>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Testing
                            </td>
                            <td>
                                Testing
                            </td>
                            <td>
                                Testing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, null)(Companies)