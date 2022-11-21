import React from "react";
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import RecordList from "./components/recordList";
import Create from "./components/create";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/record/view">View</Link>
            </li>
            <li>
              <Link to="/record/add">Add New</Link>
            </li>
          </ul>
        </nav>  
        <Routes>
          <Route exact path="/record/add" element= {<Create/>} >
          </Route>
          <Route exact path="/record/view" element= {<RecordList />} >
          </Route>
        </Routes> 
      </div>
    </Router>   
  );
 };
  
 export default App;
 
