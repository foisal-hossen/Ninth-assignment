import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Questions from "../components/Questions/Questions";
import Statistics from "../components/Statistics/Statistics";
import Topic from "../components/Topics/Topic";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return fetch("https://openapi.programming-hero.com/api/quiz");
    },
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/topics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Topic></Topic>,
      },

      {
        path: "/statistics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/quiz/:quizId",
        loader: async ({ params }) =>
          fetch(
            ` https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
        element: <Questions></Questions>,
      },
      {
        path: "*",
        element: (
          <div className="text-yellow-600 text-5xl font-bold">
            This is Not Our Page !!
          </div>
        ),
      },
    ],
  },
]);
