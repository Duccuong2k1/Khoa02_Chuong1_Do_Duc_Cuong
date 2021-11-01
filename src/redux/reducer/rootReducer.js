import { combineReducers } from "redux";
import burgerReducer from "./OrderBurgerReducer";

const rootReducer = combineReducers({
    burger: burgerReducer,
})


export default rootReducer;