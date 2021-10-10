declare module "*.svg" {
  const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line import/no-default-export -- prefer default export to allow easier aliasing
  export default svg;
}
