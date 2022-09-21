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

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index].question);

  const updateQuestion = () => {
    console.log("index", index);
    const nextQuestion = index + 1;
    setIndex(nextQuestion);
    console.log("updatedIndex", index);
    setQuestion(questions[index].question);
    console.log("question", question);
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
