import React, { useState, Fragment } from 'react'

const ObjectHooks = () => {

    const [appState, setAppState] = useState({
        firstName: 'Emma',
        lastName: 'Weikend',
        isEnrolled: true,
        tasks: []
    })


    return (
        <Fragment>
            <div>
                <button onClick={(e) => { setAppState({ ...appState, isEnrolled: !appState.isEnrolled }) }} >Change Customer Enrolled Status</button>
            </div>
        </Fragment>
    )
}


export default ObjectHooks;
