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
              <h1>true</h1>
            </div>
            <div className="falsebox">
              <h1>false</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
