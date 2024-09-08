import { useQuizContext } from "../../context";


function Explanation() {
  const {quiz,currentQue,setSeconds} = useQuizContext();
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-green-600 text-black hover:bg-green-700"
        onClick={() =>{ 
          setSeconds(99)
          document.getElementById("my_modal_1").showModal()
        }}
      >
        Need Explanation ?
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Answer Explanation !</h3>
          <p className="py-4">
            {quiz[currentQue].explanationInDetails} so answer is {quiz[currentQue].ans}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Explanation;
