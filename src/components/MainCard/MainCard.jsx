import Buttons from "../Buttons/Buttons";

function MainCard() {
  return (
    <>
      <div className="mockup-window bg-base-300 border max-w-[80%] min-w-[30%] w-fit m-auto my-20">
        <div className="bg-base-200 flex justify-center px-2 py-10 w-full">
          <div className="w-[90%]">
            <h2 className="font-bold mb-2">1. What is react js ? </h2>
            <div className="">
              <div role="alert" className="alert alert-error my-2 p-2 flex items-center">
                <h3 className="ml-2 font-semibold self-start">A.</h3>
                <span className="mr-2 self-start">Your purchase has been confirmed!</span>
              </div>
              <div role="alert" className="alert alert-success my-2 p-2 flex items-center">
                <h3 className="ml-2 font-semibold self-start">B.</h3>
                <span className="mr-2 self-start">Your purchase has been confirmed!</span>
              </div>
              <div role="alert" className="alert alert-success my-2 p-2 flex items-center">
                <h3 className="ml-2 font-semibold self-start">C.</h3>
                <span className="mr-2 self-start">Your purchase has been confirmed!</span>
              </div>
              <div role="alert" className="alert alert-success my-2 p-2 flex items-center">
                <h3 className="ml-2 font-semibold self-start">D.</h3>
                <span className="mr-2 self-start">Your purchase has been confirmed!</span>
              </div>
            </div>
          </div>
        </div>
        <Buttons />
      </div>
    </>
  );
}

export default MainCard;
