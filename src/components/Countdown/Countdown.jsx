import { useEffect } from "react";
import { useQuizContext } from "../../context";

function Countdown() {
  const { setShowOver, seconds, setSeconds } = useQuizContext();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval
    }
  }, [seconds,setSeconds]);

  if (seconds == 0) {
    setShowOver(true);
  }

  // console.log(seconds);

  return (
    <div className="flex items-center gap-4 relative">
      <h3 className="bg-slate-700 p-2 rounded-xl pr-16 mr-16">Time Remaining -</h3>
      <div className="countdown font-mono text-3xl absolute right-0">
        <span  style={{ "--value": `${seconds}` }}>seconds</span>
      </div>
    </div>
  );
}

export default Countdown;
