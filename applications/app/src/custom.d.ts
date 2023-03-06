declare module "*.svg" {
  const svg: React.FunctionComponent<React.SVGProps>;
  // eslint-disable-next-line no-restricted-exports, import/no-default-export -- prefer default export to allow easier aliasing
  export default svg;
}
