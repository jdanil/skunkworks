import type { FunctionComponent, SVGProps } from "react";

declare module "*.svg" {
  const svg: FunctionComponent<SVGProps>;
  // eslint-disable-next-line import/no-default-export -- prefer default export to allow easier aliasing
  export default svg;
}
