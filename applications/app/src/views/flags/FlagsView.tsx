import { FunctionComponent, useContext } from "react";

import { FlagContext } from "../../contexts/flag/FlagContext";
import { i18n } from "../../utils";
import { Switch } from "./components/Switch";

export const FlagsView: FunctionComponent = () => {
  const { flags } = useContext(FlagContext);

  return (
    <>
      <h1>{i18n("Hello, Flags!")}</h1>
      <div>
        {flags.map((flag) => (
          <div key={flag.id}>
            <div>
              <span>{flag.name}</span>
              <span>{flag.id}</span>
              <div>{flag.description}</div>
            </div>
            <div>
              <Switch {...flag} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
