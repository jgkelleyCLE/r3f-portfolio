import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setElapsedTime, setEndTime } from "@/redux/gateSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const isTimerRunning = useSelector((state) => state.gate.startTimer);
  const elapsedTime = useSelector((state) => state.gate.elapsedTime);
  const lowGravity = useSelector((state) => state.settings.lowGravity);
  
  const startTimeRef = useRef(null); // Use ref to persist start time

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now() - elapsedTime * 1000; // Maintain elapsed time
      }

      interval = setInterval(() => {
        const currentTime = Math.floor((Date.now() - startTimeRef.current) / 1000); // Convert to seconds
        dispatch(setElapsedTime(currentTime));
      }, 100); // Reduce update frequency to 100ms
    } else {
      startTimeRef.current = null; // Reset start time when timer stops
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, dispatch]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`bg-black/50 rounded-md font-mono text-lg md:text-3xl ${lowGravity ? "text-red-500" : "text-lime-400"} px-2 flex flex-col items-center`}>
      <h1 className={`${lowGravity ? "line-through" : null}`}>{formatTime(elapsedTime)}</h1>
      <h1 className={`text-[9px] md:text-xs -mt-1 md:-mt-1`}>{lowGravity ? "Low Gravity" : "Challenge Timer"}</h1>
    </div>
  );
};

export default Timer;
