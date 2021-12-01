export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ITodo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
