/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { quizContext } from "./context";
import run from "../Utils/Gemini";

export default function Store({ children }) {
  const [showOver,setShowOver] = useState(false)
  const [score,setScore] =useState(0)
  const [quiz, setQuiz] = useState([]);
  const [quizTopic, setQuizTopic] = useState("");
  const [quizCount, setQuizCount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentQue, setCurrentQue] = useState(0);
  const [disable, setDisable] = useState(true);
  const [showAns,setShowAns] = useState(false)
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const OptionsArr = [option1, option2, option3, option4];
  const [seconds, setSeconds] = useState(99);

  

  const obj = {
    quiz,
    setQuiz,
    loading,
    setLoading,
    error,
    setError,
    quizTopic,
    setQuizTopic,
    quizCount,
    setQuizCount,
    requestQuiz,
    currentQue,
    setCurrentQue,
    disable,
    setDisable,
    option1,
    option2,
    option3,
    option4,
    OptionsArr,
    score,setScore,
    showOver,setShowOver,
    showAns,setShowAns,
    seconds, setSeconds
  };

  async function requestQuiz(topic, count) {
    if (topic == "" || count == "") {
      alert("Please enter question and count to start");
    } else if (isNaN(parseInt(count))) {
      alert("Please enter valid number");
    } else if (parseInt(count) > 20) {
      alert("Only 20 Questions are allowed");
    } else {
      setLoading(true);
      setQuiz([]);
      const response = await run(topic, count);
      const data = JSON.parse(response);
      if (data.length > 0) {
        setQuiz(data);
        setLoading(false);
      } else {
        setQuiz([data]);
        setLoading(false);
      }
    }
  }

  return <quizContext.Provider value={obj}>{children}</quizContext.Provider>;
}
