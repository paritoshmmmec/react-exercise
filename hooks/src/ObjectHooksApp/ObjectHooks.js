import React, { useState, Fragment } from 'react'

const ObjectHooks = () => {

    const initialState = {
        firstName: 'Emma',
        lastName: 'Weikend',
        isEnrolled: true,
        tasks: []
    }

    const [appState, setAppState] = useState(initialState)


    return (
        <Fragment>
            <div>
                <input type="text" value={appState.firstName}
                    onChange={(e) => { setAppState({ ...appState, firstName: e.target.value }) }} />

            </div>
            <div>
                <input type="checkbox" checked={appState.isEnrolled}
                    onChange={(e) => { setAppState({ ...appState, isEnrolled: !appState.isEnrolled }) }} >
                </input> Change Customer Enrolled Status
            </div>
            <div>
                <input type="button" value="Reset Customer"
                    onClick={(e) => { setAppState({ ...initialState }) }} />

            </div>

            <div>
                {appState.isEnrolled.toString()}
            </div>
            <div>
                {appState.firstName}
            </div>
        </Fragment>
    )
}


export default ObjectHooks;
