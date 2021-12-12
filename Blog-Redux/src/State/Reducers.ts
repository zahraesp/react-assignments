import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles/Reducer";
import { UserReducer } from "./User/Reducer";
import { AuthReducer } from "./Authentication/Reducer";

export const Reducers = combineReducers({
  Auth: AuthReducer,
  User: UserReducer,
  Article: ArticleReducer,
});
