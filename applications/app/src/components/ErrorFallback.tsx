/* eslint-disable import/newline-after-import -- false positive, watch https://github.com/import-js/eslint-plugin-import/issues/2673 */
import { type FunctionComponent } from "react";
// eslint-disable-next-line import/no-unresolved, node/no-missing-import -- false positive
import { type FallbackProps } from "react-error-boundary";
/* eslint-enable import/newline-after-import -- re-enable */

import { i18n } from "../utils";

export const ErrorFallback: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <>
    <h1>{i18n("Something has gone wrong.")}</h1>
    <div>
      <samp>{(error as Error).message}</samp>
    </div>
    <button onClick={resetErrorBoundary} type="button">
      {i18n("Try again?")}
    </button>
  </>
);
