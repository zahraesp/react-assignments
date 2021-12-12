const initialState = {
  article: [],
};

export const ArticleReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return { ...state, article: [...state.article, action.payload ]};
    case "DELETE_ARTICLE":
      return { ...state, article: action.payload };
    case "EDIT_ARTICLE":
      return { ...state, article: action.payload };
    case "GET_ALL":
      return { article: action.payload };
    case "GET_BY_UID":
      return { article: action.payload };
    default:
      return state;
  }
};
