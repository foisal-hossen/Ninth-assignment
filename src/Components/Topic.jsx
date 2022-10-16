import React, { useContext } from "react";
import { DataContext } from "./Main";
import QuestionType from "./QuestionType";

const Topic = () => {
  const catagory = useContext(DataContext);
  const types = catagory.data;
  return (
    <div className="bg-violet-900 p-5 py-20 grid grid-cols-1 md:grid-cols-4 gap-3">
      {types.map((type) => (
        <QuestionType key={type.id} type={type}></QuestionType>
      ))}
    </div>
  );
};

export default Topic;
