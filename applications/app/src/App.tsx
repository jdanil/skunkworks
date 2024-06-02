import { broadcastQueryClient } from "@tanstack/query-broadcast-client-experimental";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { type FunctionComponent, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { bodyStyle } from "./App.css";
import { DeveloperTools } from "./components/DeveloperTools";
import { ErrorFallback } from "./components/ErrorFallback";
import { Header } from "./components/Header";
import { RouteErrorFallback } from "./components/RouteErrorFallback";
import { SuspenseFallback } from "./components/SuspenseFallback";
import { name } from "./config/application";
import { flags } from "./config/flags";
import { path } from "./config/router";
import { FlagContextProvider } from "./contexts/flag/FlagContextProvider";
import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";

const ContentView = lazy(async () =>
  import("./views/content/ContentView").then((module) => ({
    default: module.ContentView,
  })),
);
const FlagsView = lazy(async () =>
  import("./views/flags/FlagsView").then((module) => ({
    default: module.FlagsView,
  })),
);
const HomeView = lazy(async () =>
  import("./views/home/HomeView").then((module) => ({
    default: module.HomeView,
  })),
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- set gcTime to 24 hours to match persistQueryClient's maxAge, see https://tanstack.com/query/v5/docs/framework/react/plugins/persistQueryClient
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
const persister = createSyncStoragePersister({
  key: `${name}-persisted-cache`,
  storage: window.localStorage,
});
void persistQueryClient({ persister, queryClient });
broadcastQueryClient({
  broadcastChannel: `${name}-broadcast-channel`,
  queryClient,
});

const router = createBrowserRouter(
  [
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention -- react-router property name
      ErrorBoundary: RouteErrorFallback,
      children: [
        {
          // eslint-disable-next-line @typescript-eslint/naming-convention -- react-router property name
          Component: HomeView,
          path: path.home,
        },
        {
          // eslint-disable-next-line @typescript-eslint/naming-convention -- react-router property name
          Component: ContentView,
          path: path.content,
        },
        {
          // eslint-disable-next-line @typescript-eslint/naming-convention -- react-router property name
          Component: FlagsView,
          path: path.flags,
        },
      ],
      element: (
        <>
          <Header />
          <div className={bodyStyle}>
            <Outlet />
          </div>
          <DeveloperTools />
        </>
      ),
    },
  ],
  {
    future: {
      /* eslint-disable @typescript-eslint/naming-convention -- react-router property names */
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      /* eslint-enable @typescript-eslint/naming-convention -- re-enable */
    },
  },
);

export const App: FunctionComponent = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <FlagContextProvider flags={flags}>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <RouterProvider
            fallbackElement={<SuspenseFallback />}
            router={router}
          />
        </ThemeContextProvider>
      </QueryClientProvider>
    </FlagContextProvider>
  </ErrorBoundary>
);
