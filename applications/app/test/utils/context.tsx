import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type FunctionComponent, type ReactElement, useMemo } from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import {
  FlagContext,
  type FlagContextInfo,
} from "../../src/contexts/flag/FlagContext";
import {
  ThemeContext,
  type ThemeContextInfo,
} from "../../src/contexts/theme/ThemeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export type TestProviderProps = {
  readonly children?: React.ReactNode;
  readonly withFlagContext?: Partial<FlagContextInfo> | boolean;
  readonly withReactQueryContext?: boolean;
  readonly withRouterContext?: boolean;
  readonly withThemeContext?: Partial<ThemeContextInfo> | boolean;
};

// eslint-disable-next-line max-statements -- not a concern for test utilities
export const TestProvider: FunctionComponent<TestProviderProps> = ({
  children,
  withFlagContext,
  withReactQueryContext,
  withRouterContext,
  withThemeContext,
}) => {
  const flagContextValue = useMemo<FlagContextInfo>(
    () => ({
      flags: [],
      setFlag: jest.fn(),
      ...(typeof withFlagContext === "boolean" ? {} : withFlagContext),
    }),
    [withFlagContext],
  );

  const themeContextValue = useMemo<ThemeContextInfo>(
    () => ({
      colourScheme: "light",
      setColourScheme: jest.fn(),
      ...(typeof withThemeContext === "boolean" ? {} : withThemeContext),
    }),
    [withThemeContext],
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

  if (withThemeContext) {
    component = (
      <ThemeContext.Provider value={themeContextValue}>
        {component}
      </ThemeContext.Provider>
    );
  }

  if (withRouterContext) {
    const router = createMemoryRouter([
      {
        element: component,
      },
    ]);
    component = <RouterProvider router={router} />;
  }

  return component;
};
