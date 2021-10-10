import HomeIcon from "@material-icons/svg/svg/home/baseline.svg";
import { FunctionComponent, useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { ColourScheme, ThemeContext } from "../contexts/theme/ThemeContext";
import { useFlag } from "../hooks/use-flag";
import { i18n } from "../utils";
import { headerStyle, listStyle, navStyle } from "./Header.css";

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
    <header className={headerStyle}>
      <nav className={navStyle}>
        <Link to="">
          <HomeIcon aria-label={i18n("Home")} />
        </Link>
        <ul className={listStyle}>
          <li>
            <Link to="content">{i18n("content")}</Link>
          </li>
          {useFlag("dev-tools") ? (
            <li>
              <Link to="flags">{i18n("flags")}</Link>
            </li>
          ) : null}
        </ul>
        <button onClick={handleClick} type="button">
          {getColourSchemeToggleIcon(colourScheme)}
        </button>
      </nav>
    </header>
  );
};
