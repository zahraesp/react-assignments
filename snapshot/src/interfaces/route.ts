export default interface IRoute {
  path: string;
  name: string;
  exact: true;
  componet: any;
  props?: any;
}
