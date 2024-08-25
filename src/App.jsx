import MainCard from "./components/MainCard/MainCard";
import Navbar from "./components/Navbar/Navbar";
import { useQuizContext } from "./context";

// import run from "./Utils/Gemini";

function App() {
  // run("dsa",2)
  const {
    quiz,
    // setQuiz,
    // loading,
    // setLoading,
    // error,
    // setError,
    // disable,
    // score
  } = useQuizContext();
 
  console.log(quiz)  
  // console.log(disable)    



  return (
    <>
      <Navbar />
      <MainCard />
    </>
  );
}

export default App;
