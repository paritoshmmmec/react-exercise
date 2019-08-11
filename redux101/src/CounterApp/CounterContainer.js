import React from 'react'
import { connect } from 'react-redux'

const CounterContainer = ({ count }) => {
    return <h1>Testing {count}</h1>
}

const mapStateToProps = (state) => {
    return { count: state.count }
}


export default connect(mapStateToProps)(CounterContainer);





