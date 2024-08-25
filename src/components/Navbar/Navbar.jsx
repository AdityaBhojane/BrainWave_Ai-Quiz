import { useQuizContext } from "../../context";


function Navbar() {
  const { quizTopic, setQuizTopic, quizCount, setQuizCount,requestQuiz,setShowOver,setDisable,setCurrentQue,setShowAns} = useQuizContext();

  return (
    <>
      <div className="navbar bg-base-100 w-[80%] m-auto">
        <div className="navbar-start flex flex-col">
          <h2 className="text-2xl self-start font-semibold">Ai Quiz</h2>
          <p className="text-[12px] self-start">
            Powered by <br /> Gemini flash 1.5+
          </p>
        </div>

        <div className="navbar-end">
          <div className="flex flex-col ">
            <input
              value={quizTopic}
              onChange={(e) => setQuizTopic(e.target.value)}
              type="text"
              placeholder="Question Topic"
              className="input input-bordered h-8 my-2 w-36 md:w-auto "
            />
            <input
              value={quizCount}
              onChange={(e) => setQuizCount(e.target.value)}
              type="text"
              placeholder="No of Questions"
              className="input input-bordered h-8 w-36 md:w-auto"
            />
          </div>
          <button 
            onClick={()=>{requestQuiz(quizTopic,quizCount); setShowOver(false); setDisable(true); setCurrentQue(0); setShowAns(false);}}
           className  ="btn btn-outline btn-success relative  px-2 pt-6 pb-11 mt-2 mx-1"
           >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>  
    </>
  );
}

export default Navbar;
