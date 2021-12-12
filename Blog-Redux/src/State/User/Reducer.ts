const initialState = null;

export const UserReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    default:
      return state;
  }
};
