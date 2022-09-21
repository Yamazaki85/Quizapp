import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: `Does chicken have 4 legs?`,
      answer: false,
    },
    {
      question: `Is Mount Kilimanjaro the worlds tallest peak?`,
      answer: false,
    },
    {
      question: `Is the capital of Australia Sydney?`,
      answer: false,
    },
    {
      question: `Can polar bears only live in the Arctic region, not in the Antarctic?`,
      answer: true,
    },
    {
      question: `Is the moon wider than Australia?`,
      answer: false,
    },
  ];
  let idx = 0;
  const [index, setIndex] = useState(idx);
  const [question, setQuestion] = useState(questions[0].question);

  const incrementQuestion = () => {
    idx += 1;
    setIndex(idx);
  };

  const updateQuestion = () => {
    console.log(idx);
    setIndex(incrementQuestion());
    setQuestion(questions[idx].question);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="question-box">
          <h1>{question}</h1>
        </div>
        <div className="answer-boxes">
          <div className="tf-boxes">
            <div className="truebox">
              <button className="btn" onClick={() => updateQuestion()}>
                True
              </button>
            </div>
            <div className="falsebox">
              <button className="btn" onClick={() => updateQuestion()}>
                False
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
