import { FunctionComponent, ReactElement, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import {
  FlagContext,
  FlagContextInfo,
} from "../../src/contexts/flag/FlagContext";
import {
  ThemeContext,
  ThemeContextInfo,
} from "../../src/contexts/theme/ThemeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export type TestProviderProps = {
  readonly flagContextInfo?: Partial<FlagContextInfo>;
  readonly themeContextInfo?: Partial<ThemeContextInfo>;
  readonly withFlagContext?: boolean;
  readonly withReactQueryContext?: boolean;
  readonly withRouterContext?: boolean;
  readonly withThemeContext?: boolean;
};

// eslint-disable-next-line max-lines-per-function, max-statements -- not a concern for test utilities
export const TestProvider: FunctionComponent<TestProviderProps> = ({
  children,
  flagContextInfo,
  themeContextInfo,
  withFlagContext,
  withReactQueryContext,
  withRouterContext,
  withThemeContext,
}) => {
  const flagContextValue = useMemo<FlagContextInfo>(
    () => ({
      flags: [],
      setFlag: jest.fn(),
      ...flagContextInfo,
    }),
    [flagContextInfo],
  );

  const themeContextValue = useMemo<ThemeContextInfo>(
    () => ({
      colourScheme: "light",
      setColourScheme: jest.fn(),
      ...themeContextInfo,
    }),
    [themeContextInfo],
  );

  let component = children as ReactElement;

  if (withFlagContext) {
    component = (
      <FlagContext.Provider value={flagContextValue}>
        {component}
      </FlagContext.Provider>
    );
  }

  if (withReactQueryContext) {
    component = (
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  }

  if (withRouterContext) {
    component = <MemoryRouter>{component}</MemoryRouter>;
  }

  if (withThemeContext) {
    component = (
      <ThemeContext.Provider value={themeContextValue}>
        {component}
      </ThemeContext.Provider>
    );
  }

  return component;
};
