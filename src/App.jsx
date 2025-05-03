{/* import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import Teams from "./Teams.jsx"; 
import Profile from "./Profile.jsx"; 
import Student from "./Student.jsx"; 
import User from "./User.jsx"
import Button from "./Button.jsx";
import Counter from "./Counter.jsx"; */}
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";

 //function App() {
  //return(
    //<>
      //<Header/>
      //<Teams/>
      //<Footer/> 
      //<Profile/>
      //<Student name = "Eddie" age = {20} isStudent = {true}/>
      //<User isLoggedIn = {true} username = "Eddie"/> 
      //<Button/>
      //<Counter/>


    //</>
  //);
//}

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App
