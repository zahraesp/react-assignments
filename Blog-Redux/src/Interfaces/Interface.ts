export interface IUser {
  email: string;
  password: any;
}

export interface IArticle {
  id?: string;
  userId?: string;
  body: string;
  title: string;
}
