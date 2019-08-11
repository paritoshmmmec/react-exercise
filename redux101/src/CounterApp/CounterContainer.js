import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = (state) => {
    return { count: state.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);





