import React from "react";
import ReactDOM from "react-dom/client";

import "./quiz.css";

const Quiz = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="question-box">
          <h1>Question</h1>
        </div>
        <div className="answer-boxes">
          <div className="tf-boxes">
            <div className="truebox">
              <button className="btn">True</button>
            </div>
            <div className="falsebox">
              <button className="btn">False</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
