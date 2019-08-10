import Counter from './Counter'
import { connect } from 'react-redux'
import { increment, decrement } from './actions/actions';

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)