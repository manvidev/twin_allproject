import React, { useState } from "react";

export const Count = () => {
  const [countA, setCountA] = useState(0);
  //   let countA = 0;
  const IncNum = () => {
    setCountA(countA + 1);
    console.log("clicked");
  };

  return (
    <div>
      <p> {countA} </p> <button onClick={IncNum}> Click ME </button>{" "}
    </div>
  );
};
