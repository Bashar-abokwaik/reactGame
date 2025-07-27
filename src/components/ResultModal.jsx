import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = ((1 - remainingTime / (targetTime * 1000)) * 100).toFixed(0);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You score: {score}</h2>}
      <p>
        The target time is <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTime} seconds left. </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
