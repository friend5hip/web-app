import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";
import TestPage from "../pages/TestPage";

const loading = <div className="bg-red-500">loading...</div>;
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
const Test = lazy(() => import("../pages/TestPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/member",
    children: memberRouter(),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={loading}>
        <Test />
      </Suspense>
    ),
  },
]);

export default root;
