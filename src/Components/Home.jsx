import React from "react";
import logo from "../Image/banner.png";
import Topic from "./Topic";

const Home = () => {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold bg-indigo-900 pt-5">
        Now! Quizzy Team Here!
      </h1>
      <p className="text-white text-lg p-8 font-semibold bg-indigo-900 h-48">
        Our platfrom provide a greate full opportiunities for student education.
        we will provide quiz question and it is about programming world. <br />{" "}
        Most of the country now involed in internet. And web development can
        easy to create a global communication for world people. <br />
        And we also want to share our workl with you.
      </p>
      <img className="w-full h-3/5 " src={logo} alt="" />
      <Topic></Topic>
    </div>
  );
};

export default Home;
