import React, { useState } from 'react';

const randomFunction = () => {
    const [appState, setAppState] = useState({
        firstName: '',
        lastName: '',
        isTermConditionSigned: false
    })
    const setFirstName = (firstName) => setAppState({ ...appState, firstName: firstName })
    const setLastName = (lastName) => setAppState({ ...appState, lastName: lastName })
    const setTermsCondition = (isChecked) => setAppState({ ...appState, isTermConditionSigned: isChecked })

    return { appState, setFirstName, setLastName, setTermsCondition }
}


export default randomFunction;
