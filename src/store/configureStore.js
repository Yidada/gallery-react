/**
 * Created by zhangyida on 16/5/1.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    return store
}