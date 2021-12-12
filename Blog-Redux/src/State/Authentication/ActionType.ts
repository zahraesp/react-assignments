export enum ActionType {
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  ADD_USER = "ADD_USER",
}

interface ISignInSuccess {
  type: ActionType.SIGN_IN_SUCCESS;
}

interface ISignUpSuccess {
  type: ActionType.SIGN_UP_SUCCESS;
}

interface ISignOutSuccess {
  type: ActionType.SIGN_OUT_SUCCESS;
}

export type Action = ISignInSuccess | ISignUpSuccess | ISignOutSuccess;
