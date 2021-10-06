import { FunctionComponent, useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { ColourScheme, ThemeContext } from "../contexts/theme/ThemeContext";
import { useFlag } from "../hooks/use-flag";
import { i18n } from "../utils";

const getColourSchemeToggleIcon = (colourScheme: ColourScheme): string => {
  switch (colourScheme) {
    case "light":
      return "🌙";
    case "dark":
      return "☀️";
    default:
      return "";
  }
};

export const Header: FunctionComponent = () => {
  const { colourScheme, setColourScheme } = useContext(ThemeContext);
  const handleClick = useCallback(() => {
    setColourScheme(colourScheme === "dark" ? "light" : "dark");
  }, [colourScheme, setColourScheme]);

  return (
    <header>
      <nav>
        <Link to="">{i18n("home")}</Link>
        <Link to="content">{i18n("content")}</Link>
        {useFlag("dev-tools") ? <Link to="flags">{i18n("flags")}</Link> : null}
        <button onClick={handleClick} type="button">
          {getColourSchemeToggleIcon(colourScheme)}
        </button>
      </nav>
    </header>
  );
};
