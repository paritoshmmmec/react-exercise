import Counter from './Counter'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.countReducers.count
    }
}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)