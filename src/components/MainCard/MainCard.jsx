import { useQuizContext } from "../../context";
import Buttons from "../Buttons/Buttons";
import Explanation from "../Explanation/Explanation";
import Over from "../Over/Over";
import Skeleton from "../skeleton/Skeleton";

function MainCard() {
  const {
    loading,
    quiz,
    currentQue,
    setCurrentQue,
    disable,
    setDisable,
    option1,
    option2,
    option3,
    option4,
    setScore,
    showOver,
    showAns,
    setShowAns
  } = useQuizContext();

  function questionResult(no, e) {
    if (disable) {
      if (no == quiz[currentQue].ans) {
        e.currentTarget.className += " alert alert-success";
        setDisable(false);
        setScore((pre) => pre + 1);
        setShowAns(true);
      } else {
        e.currentTarget.className += " alert alert-error";
        setDisable(false);
        setShowAns(true)
      }
    }
  }

  return (
    <>
      {showOver ? (
        <Over />
      ) : (
        <div>
          <div className="mockup-window bg-base-300 border max-w-[80%] min-w-[30%] w-fit m-auto my-20">
            {loading ? (
              <Skeleton />
            ) : (
              <div>
                {quiz?.length == 0 ? (
                  <h1 className="m-20 text-2xl font-bold">
                    Welcome to the Ai Quiz Context
                  </h1>
                ) : (
                  <div>
                    <div className="bg-base-200 flex justify-center px-2 py-10 w-full">
                      <div className="w-[90%]">
                        <h2 className="font-bold mb-5">
                          {currentQue + 1}. {quiz[currentQue]?.question}{" "}
                        </h2>
                        <div className="">
                          <div
                            ref={option1}
                            onClick={(e) => questionResult("A", e)}
                            role="alert"
                            className={`border border-[#ccc] rounded-2xl my-2 p-2 flex items-center cursor-pointer  `}
                          >
                            <h3 className="ml-2 font-semibold self-start">
                              A.
                            </h3>
                            <span className="mr-2 self-start ">
                              {quiz[currentQue]?.options["A"]}
                            </span>
                          </div>
                          <div
                            ref={option2}
                            onClick={(e) => questionResult("B", e)}
                            role="alert"
                            className={` border border-[#ccc] rounded-2xl  my-2 p-2 flex items-center cursor-pointer `}
                          >
                            <h3 className="ml-2 font-semibold self-start">
                              B.
                            </h3>
                            <span className="mr-2 self-start">
                              {quiz[currentQue]?.options["B"]}
                            </span>
                          </div>
                          <div
                            ref={option3}
                            onClick={(e) => questionResult("C", e)}
                            role="alert"
                            className={`border border-[#ccc] rounded-2xl my-2 p-2 flex items-center cursor-pointer `}
                          >
                            <h3 className="ml-2 font-semibold self-start">
                              C.
                            </h3>
                            <span className="mr-2 self-start">
                              {quiz[currentQue]?.options["C"]}
                            </span>
                          </div>
                          <div
                            ref={option4}
                            onClick={(e) => questionResult("D",e)}
                            role="alert"
                            className={`border border-[#ccc] rounded-2xl my-2 p-2 flex items-center cursor-pointer `}
                          >
                            <h3 className="ml-2 font-semibold self-start">
                              D.
                            </h3>
                            <span className="mr-2 self-start">
                              {quiz[currentQue]?.options["D"]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Buttons setCurrentQue={setCurrentQue} />
                    </div>
                    <div className="text-center mb-5">
                    {showAns && <Explanation />}
                    </div> 
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MainCard;
