import HomeIcon from "@material-icons/svg/svg/home/baseline.svg";
import { type FunctionComponent, useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { path } from "../config/router";
import {
  type ColourScheme,
  ThemeContext,
} from "../contexts/theme/ThemeContext";
import { useFlag } from "../hooks/use-flag";
import { i18n } from "../utils";
import {
  headerStyle,
  listStyle,
  listItemStyle,
  logoStyle,
  navStyle,
} from "./Header.css";

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
        {/* eslint-disable-next-line react/forbid-component-props -- allow component props for Link which renders an anchor */}
        <Link className={logoStyle} to={path.home}>
          <HomeIcon aria-label={i18n("Home")} />
        </Link>
        <ul className={listStyle}>
          <li className={listItemStyle}>
            <Link to={path.content}>{i18n("content")}</Link>
          </li>
          {useFlag("dev-tools") ? (
            <li className={listItemStyle}>
              <Link to={path.flags}>{i18n("flags")}</Link>
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
