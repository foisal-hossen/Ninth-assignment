import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import Questions from "./Quesions";
import Statistics from "./Statistics";
import Topic from "./Topic";
import Main from "./Main";
import ErrorPage from './ErrorPage'


export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return fetch("https://openapi.programming-hero.com/api/quiz");
    },

    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path :'/home',
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
      
    ],
  },
]);
