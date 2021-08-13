import { createStore, combineReducers } from "redux";
import gameOanTuXiReducer from "./reducers/gameOanTuTiReducer";

const rootReducer = combineReducers({
    gameOanTuXiReducer,
});

const store = createStore(
    rootReducer,

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;