import { useQuizContext } from "../../context";

/* eslint-disable react/prop-types */
function Buttons({ setCurrentQue }) {
  const { OptionsArr, setDisable, quiz, currentQue,setShowOver} = useQuizContext();
  return (
    <>
      <button
        onClick={() => {
          if (currentQue >= quiz.length-1) {
            setShowOver(true)
          } else {
            OptionsArr.map((option) => {
              option.current.classList.remove("alert-success");
              option.current.classList.remove("alert");
              option.current.classList.remove("alert-error");
            });
            setCurrentQue((pre) => pre + 1);
            setDisable(true);
          }
        }}
        className="btn btn-outline w-1/2 mb-5 mx-auto"
      >
        Next Question
      </button>
    </>
  );
}

export default Buttons;
