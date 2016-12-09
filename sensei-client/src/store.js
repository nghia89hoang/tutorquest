import {createStore, applyMiddleware, compose} from 'redux'
import {syncHistoryWithStore, routerMiddleware, push} from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from './reducers/index'
import promiseMiddleware from './promiseMiddleware'

const enhancer  = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)


const defaultState = {
  user: {},
  courses: [],
  teachers: []
}
const _routerMiddleware = routerMiddleware(browserHistory)
const finalCreateStore = applyMiddleware(_routerMiddleware)(createStore)
const store = finalCreateStore(rootReducer, defaultState, enhancer)
export const history = syncHistoryWithStore(browserHistory, store)


if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
export default store