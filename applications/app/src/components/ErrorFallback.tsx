import type { FunctionComponent } from "react";
import type { FallbackProps } from "react-error-boundary";

import { i18n } from "../utils";

export const ErrorFallback: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <>
    <h1>{i18n("Something has gone wrong.")}</h1>
    <div>
      <samp>{error.message}</samp>
    </div>
    <button onClick={resetErrorBoundary} type="button">
      {i18n("Try again?")}
    </button>
  </>
);
