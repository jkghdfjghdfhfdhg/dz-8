import React from "react";
import { useState } from "react";

const Main = ({ question, answer, text, op, prod }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const Counter = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <div className="main">
      <div className="main-block">
        <div className="main-text">
          <p className="props-first">{text}</p>
          <div className="main-pokup">
            <p className="op">{op}</p>
            <span className="prod">{prod}</span>
            <div
              className="question"
              onClick={Counter}
              style={{ fontSize: "26px" }}
            >
              {question}
              {isAnswerVisible ? (
                <span className="minus">-</span>
              ) : (
                <span className="plus">+</span>
              )}
            </div>
            {isAnswerVisible && <div className="answer">{answer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
