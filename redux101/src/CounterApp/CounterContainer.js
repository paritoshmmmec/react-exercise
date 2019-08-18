import { connect } from 'react-redux'
import { incrementCounter } from './store/actions/actions'
import Counter from './Counter'


const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = {
    incrementCounter: incrementCounter
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);





