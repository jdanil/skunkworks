import { type FunctionComponent } from "react";

import { useRouteError } from "react-router-dom";
import { i18n } from "../utils";

export const RouteErrorFallback: FunctionComponent = () => {
  const error = useRouteError();

  return (
    <>
      <h1>{i18n("Something has gone wrong.")}</h1>
      <div>
        <samp>{(error as Error).message}</samp>
      </div>
    </>
  );
};
