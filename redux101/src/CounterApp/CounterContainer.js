import { connect } from 'react-redux'
import Counter from './Counter'
import { incrementCounter, fetchPosts } from './actions/actions'


const mapStateToProps = (state) => {
    return {
        count: state.countReducer.count,
        posts: state.countReducer.posts
    }
}

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    fetchPosts: fetchPosts
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);





