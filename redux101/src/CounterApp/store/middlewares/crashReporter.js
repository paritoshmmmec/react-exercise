const crashReporter = store => next => action => {
    console.log(action);
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        throw err
    }
}

export default crashReporter;