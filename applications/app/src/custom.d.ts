declare module "*.svg" {
  const source: string;
  // eslint-disable-next-line import/no-default-export -- prefer default export to allow easier aliasing
  export default source;
}
