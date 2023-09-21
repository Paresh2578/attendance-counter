import { CombinedState, combineReducers } from "redux";
import Data_reduces from './Data_reduces';

const reducers = combineReducers({
    data : Data_reduces
})

export default reducers;