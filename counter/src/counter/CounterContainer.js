import Counter from './Counter'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)