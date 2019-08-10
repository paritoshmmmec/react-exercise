import React, { Fragment } from 'react'

const UserFrom = ({ setFirstName, setLastName, setTermsCondition }) => {
    return (
        <Fragment>
            <input type="text"
                placeholder="First Name"
                onChange={(e) => { setFirstName(e.target.value) }} />
            <input type="text"
                placeholder="Last Name"
                onChange={(e) => { setLastName(e.target.value) }} />
            <input type="checkbox"
                onChange={(e) => { setTermsCondition(e.target.checked) }} />
        </Fragment>
    )
}

export default UserFrom;