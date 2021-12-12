
export const addUser = (user: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
};
