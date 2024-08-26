import { useQuizContext } from "../../context";


function Over() {
    const {currentQue,score} =useQuizContext();
  return (
    <>
      <div className="card card-compact bg-slate-700 w-96 shadow-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="card-body">
          <h2 className="card-title text-3xl">Quiz is completed ! ✅</h2>
          <p className="text-xl">Your Score is {score} of {currentQue+1}</p>
          <div 
          onClick={()=>window.location.reload()}
          className="card-actions justify-end"
          >
            <button className="btn btn-primary">Restart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Over;
