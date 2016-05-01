/**
 * Created by zhangyida on 16/5/1.
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER,CLEAR_COUNTER } from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case CLEAR_COUNTER:
            return 0;
        default:
            return state
    }
}