import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Question = ({ quiz }) => {
  const { correctAnswer, options, question } = quiz;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleAnswer = (e) => {
    const value = e.target.value;
    setSelected(e.target.value);
    if (value === correctAnswer) {
      toast.success("Yes!! Correct", { autoClose: 2000 });
    } else {
      toast.error("Opps! Incorrect", { autoClose: 2000 });
    }
  };
  return (
   
    <div className="bg-rose-700 text-white font-semibold p-8 rounded-lg">
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            Quiz -{} : {question.slice(3, -4)}
          </p>
          <div className="h-6 w-6" onClick={() => setOpen(!open)}>
            {open ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>}
          </div>
        </div>
        <div className="flex flex-col items-start ml-3 px-3 py-2">
          {options.map((option, idx) => (
            <label>
              <input
                value={option}
                checked={option === selected ? true : false}
                type="checkbox"
                key={idx}
                onClick={(e) => {
                  handleAnswer(e);
                }}
              />
              {option}
            </label>
          ))}

          {open === true && (
            <p className="text-green-600 text-lg font-medium">
              Correct Answer : {correctAnswer}
            </p>
          )}
        </div>
      </div>
    </div>
   
  );
};

export default Question;
