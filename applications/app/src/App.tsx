import { FunctionComponent, Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { themeClass } from "./App.css";
import { ErrorFallback } from "./components/ErrorFallback";
import { Header } from "./components/Header";
import { SuspenseFallback } from "./components/SuspenseFallback";
import { flags } from "./config/flags";
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

const queryClient = new QueryClient();

export const App: FunctionComponent = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <FlagContextProvider flags={flags}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeContextProvider>
            <div className={themeClass}>
              <Header />
              <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                  <Route element={<HomeView />} path="" />
                  <Route element={<ContentView />} path="content" />
                  <Route element={<FlagsView />} path="flags" />
                </Routes>
              </Suspense>
            </div>
          </ThemeContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </FlagContextProvider>
  </ErrorBoundary>
);
