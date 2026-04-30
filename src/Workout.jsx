import React from "react";

export default function Workout({ title, description, time, onComplete }) {
  // Todo: Start timer
  const timerRef = React.useRef(null);

  function handleStartWorkout() {
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      onComplete();
    }, time);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    onComplete();
  }

  React.useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
