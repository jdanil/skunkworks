import { FunctionComponent, Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { broadcastQueryClient } from "react-query/broadcastQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { bodyStyle } from "./App.css";
import { DeveloperTools } from "./components/DeveloperTools";
import { ErrorFallback } from "./components/ErrorFallback";
import { Header } from "./components/Header";
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
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- set cacheTime to 24 hours to match persistQueryClient's maxAge, see https://react-query.tanstack.com/plugins/persistQueryClient
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});
const persistor = createWebStoragePersistor({
  key: `${name}-persisted-cache`,
  storage: window.localStorage,
});
await persistQueryClient({ persistor, queryClient });
broadcastQueryClient({
  broadcastChannel: `${name}-broadcast-channel`,
  queryClient,
});

export const App: FunctionComponent = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <FlagContextProvider flags={flags}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeContextProvider>
            <Header />
            <div className={bodyStyle}>
              <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                  <Route element={<HomeView />} path={path.home} />
                  <Route element={<ContentView />} path={path.content} />
                  <Route element={<FlagsView />} path={path.flags} />
                </Routes>
              </Suspense>
            </div>
            <DeveloperTools />
          </ThemeContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </FlagContextProvider>
  </ErrorBoundary>
);
