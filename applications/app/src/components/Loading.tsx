import LoadingIcon from "@material-icons/svg/svg/autorenew/baseline.svg";
import { type FunctionComponent } from "react";

import { i18n } from "../utils";
import { containerStyle, iconStyle } from "./Loading.css";

export const Loading: FunctionComponent = () => (
  <div className={containerStyle}>
    <span className={iconStyle}>
      <LoadingIcon />
    </span>
    {i18n("Loading...")}
  </div>
);
