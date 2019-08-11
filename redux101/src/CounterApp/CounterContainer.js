import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = (state) => {
    return { count: state.countReducer.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        getOrders: () => dispatch({ type: 'ORDER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);





