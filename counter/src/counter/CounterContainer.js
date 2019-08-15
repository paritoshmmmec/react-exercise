import Counter from './Counter'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './store/actions';

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)