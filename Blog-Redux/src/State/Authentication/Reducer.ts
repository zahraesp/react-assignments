import { ActionType } from "./ActionType";

export const AuthReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case ActionType.SIGN_UP_SUCCESS:
      return action.currentUser;
    case ActionType.SIGN_IN_SUCCESS:
      return action.currentUser;
    case ActionType.SIGN_OUT_SUCCESS:
      return null;
    case ActionType.ADD_USER:
      return action.payload;
    default:
      return state;
  }
};
