import React from 'react'

const UserDetails = ({ firstName, lastName, isTermConditionSigned }) => {
    return (<div>
        <p> First Name: {firstName}</p>
        <p> Last Name: {lastName}</p>
        <p> Condition Signed: {isTermConditionSigned.toString()}</p>
    </div>)

}

export default UserDetails;