import React from "react";

const Blog = () => {
  return (
    <div className="bg-violet-800  p-5">
      <h1 className="text-white text-5xl font-medium mb-5">
        Please click on The Question !!!
      </h1>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-white text-xl font-bold">
          What is the purpose of react router?
        </div>
        <div className="collapse-content font-medium text-white">
          <p>
            React is basically use for SPA(single page application) base
            application, so that it has to access different path or route for
            working.
            <br></br>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application,
            <br /> allows changing the browser URL, and keeps the UI in sync
            with the URL. And it helps to easy to access in another conponent
            and we can use it dynamically.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-white text-xl font-bold">
          How does context API works?
        </div>
        <div className="collapse-content text-white font-medium">
          <p>
            React's component pass props by Unidirectional system but react
            context api hook provide not passing props and it can use different
            components.
            <br /> React Context is a way to manage state globally. It can be
            used together with the useState Hook to share state between deeply
            nested components more easily. <br /> The Context API in React
            provides you with built-in functions and components to avoid
            prop-drilling in your component tree.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-white text-xl font-bold">
          What is useRef hook?
        </div>
        <div className="collapse-content text-white font-medium">
          <p>
            The useRef Hook is a function that returns a mutable ref object
            whose .current property is initialized with the passed <br />{" "}
            argument ( initialValue ).The useRef hook is a built-in React hook
            that takes one argument or <br /> parameter as its initial value and
            returns a reference.The reference has an interesting and useful
            property its called current.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
