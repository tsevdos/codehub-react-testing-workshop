import React from "react";
import { wordCount } from "./wordCount";

const WordCountApp = () => {
  const text = "The below paragraph contains six words!";

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">wordCount: {wordCount(text)}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default WordCountApp;
