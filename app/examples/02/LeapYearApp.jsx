import React from "react";
import { isLeap } from "./isLeap";

const LeapYearApp = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = new Date(2019, 1, 1).getFullYear();
  const _2020 = new Date(2020, 1, 1).getFullYear();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">View leap years</h5>
        <p className="card-text">
          This Year: <strong>{isLeap(currentYear) ? <>✔</> : <>✖</>}</strong>
        </p>
        <p className="card-text">
          Next Year: <strong>{isLeap(nextYear) ? <>✔</> : <>✖</>}</strong>
        </p>
        <p className="card-text">
          2020: <strong>{isLeap(_2020) ? <>✔</> : <>✖</>}</strong>
        </p>
      </div>
    </div>
  );
};

export default LeapYearApp;
