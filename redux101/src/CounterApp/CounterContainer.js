import { connect } from 'react-redux'
import Counter from './Counter'
import { incrementCounter } from './actions/actions'


const mapStateToProps = (state) => {
    return { count: state.countReducer.count }
}

const mapDispatchToProps = {
    incrementCounter: incrementCounter
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);





