
import { Route, Routes } from "react-router-dom";
import Business from "./components/business/Index";
import Personal from "./components/personal/Index";
import ExploreOurSolutions from "./components/business/exploreOurSolutions/Index";
import SignIn from "./components/business/signInPage/Index";

function App() {
  return (
   <div>
    <Personal />
   
    <Routes>
      {/* <Route index element = {<Personal />}/> */}
      <Route path="business" element = { <Business />}/>
      <Route path="exploreOurSolutions" element = { <ExploreOurSolutions />}/>
      <Route path="signIn" element = { <SignIn />}/>

    </Routes>
   </div>
  );
}
export default App;
