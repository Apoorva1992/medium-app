import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { getAllDataReducer,postDataReducer,getDataReducer, updateDataReducer} from "./reducers/post.reducer";


const rootReducer = combineReducers({
    allPosts: getAllDataReducer,
    postConfirmation: postDataReducer,
    postbyid: getDataReducer,
    updatedpostbyid:updateDataReducer

});

const store = createStore(
    rootReducer, {}, composeWithDevTools(applyMiddleware(thunk))
)

export default store;