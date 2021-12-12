import { db, auth } from "../../Services/firebaseService";
import {
  ref,
  set,
  push,
  child,
  getDatabase,
  get,
  update,
  remove,
} from "firebase/database";
import { toast } from "react-toastify";

export const GetAll = () => async (dispatch: any) => {
  try {
    const articleRef = ref(getDatabase());
    const snapshot = await get(child(articleRef, `Articles`));
    if (snapshot.exists()) {
      let result = snapshot.val();
      const values = Object.values(result);
      dispatch({ type: "GET_ALL", payload: values });
    } else {
      console.log("No data available");
      toast.error("No data available");
    }
  } catch (error) {
    toast.error("No data available");
  }
};

export const EditArticle = (article: any) => async (dispatch: any) => {
  try {
    const editArticle = ref(db, `Articles/${article.id}`);
    await update(editArticle, article);
    console.log("edit Article", article);
    toast.success("Article was Edited");

    // const articleRef = ref(getDatabase());
    // await get(child(articleRef, `Articles`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     let result = snapshot.val();
    //     const values = Object.values(result);
    //     const updateValues = values.map((item: any) => {
    //       if (item.id === article.id) {
    //         item.title = article.title;
    //         item.body = article.body;
    //         item.id = article.id;
    //         item.userId = article.userId;
    //       }
    //       return item;
    //     });
    //     dispatch({
    //       type: "EDIT_ARTICLE",
    //       payload: updateValues,
    //     });
    //   } else {
    //     console.log("No data available");
    //   }
    // });
  } catch (error) {
    toast.error("Something went Wrong");
  }
};

export const DeleteArticle = (article: any) => async (dispatch: any) => {
  try {
    const deleteArticle = ref(db, `Articles/${article.id}`);
    await remove(deleteArticle);
    toast.success("Article was Deleted");

    // const articleRef = ref(getDatabase());
    // await get(child(articleRef, `Articles`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     let result = snapshot.val();
    //     const values = Object.values(result);
    //     const updateValues = values.filter(
    //       (item: any) => item.id !== article.id
    //     );
    //     console.log("updated value", updateValues);
    //     dispatch({
    //       type: "DELETE_ARTICLE",
    //       payload: updateValues,
    //     });
    //   } else {
    //     console.log("No data available");
    //   }
    // });
  } catch (error) {
    toast.error("Something went Wrong");
  }
};

export const GetByUid = () => async (dispatch: any) => {
  try {
    const articleRef = ref(getDatabase());
    const userId = auth.currentUser?.uid;
    const snapshot = await get(child(articleRef, `Articles`));
    if (snapshot.exists()) {
      let result = snapshot.val();
      const values = Object.values(result);
      const uidValues = values.filter((item: any) => item.userId === userId);
      dispatch({ type: "GET_BY_UID", payload: uidValues });
    } else {
      console.log("No data available");
      toast.error("No data available");
    }
  } catch (error) {
    toast.error("No data available");
  }
};

export const CreateArticle = (data: any) => async (dispatch: any) => {
  const userUid = auth.currentUser?.uid;
  const articleRef = ref(db, `Articles`);
  const newArticleRef = push(articleRef);
  const key = newArticleRef.key;

  try {
    await set(newArticleRef, {
      title: data.title,
      body: data.body,
      id: key,
      userId: userUid,
    });
    const newData = {
      title: data.title,
      body: data.body,
      id: key,
      userId: userUid,
    };
    console.log(newData);
    dispatch({ type: "ADD_ARTICLE", payload: newData });
  } catch (error) {
    throw error;
  }
};
