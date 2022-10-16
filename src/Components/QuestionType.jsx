import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionType = ({ type }) => {
  const { logo, name, id, total } = type;
  const navigate = useNavigate();
  const handleQuizEvent = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="card bg-yellow-300 shadow-2xl">
      <img src={logo} alt="Shoes" />

      <div className="card-body bg-slate-900 text-white">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>Total Question : {total}</p>
        <div className="card-actions justify-end ">
          <button
            onClick={handleQuizEvent}
            className="btn btn-info text-lg font-medium text-white"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionType;
