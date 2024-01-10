/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import Scrambler from "./Scrambler";

const CycleScrambler = ({ textList, intervalMs, ...props }) => {
  const [scrambleIndex, setScrambleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambleIndex((scrambleIndex + 1) % textList.length);
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [scrambleIndex, intervalMs, textList]);

  return <Scrambler text={textList[scrambleIndex]} {...props} />;
};

export default CycleScrambler;
