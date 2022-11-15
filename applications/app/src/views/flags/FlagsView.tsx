import { type FunctionComponent, useContext } from "react";

import { FlagContext } from "../../contexts/flag/FlagContext";
import { i18n } from "../../utils";
import {
  flagStyle,
  flagIdStyle,
  flagMetadataStyle,
  flagNameStyle,
} from "./FlagsView.css";
import { Switch } from "./components/Switch";

export const FlagsView: FunctionComponent = () => {
  const { flags } = useContext(FlagContext);

  return (
    <div data-testid="flags-view">
      <h1>{i18n("Flags")}</h1>
      <div>
        {flags.map((flag) => (
          <div className={flagStyle} key={flag.id}>
            <div className={flagMetadataStyle}>
              <span className={flagNameStyle}>{flag.name}</span>
              <span className={flagIdStyle}>{`#${flag.id}`}</span>
              <div>{flag.description}</div>
            </div>
            <Switch {...flag} />
          </div>
        ))}
      </div>
    </div>
  );
};
