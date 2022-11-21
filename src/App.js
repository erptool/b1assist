import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import './App.css';
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";


//import KnowAdd from './components/KnowAdd';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="App-link" to="/record/view">View</Link>
            </li>
            <li>
              <Link to="/record/edit">Edit</Link>
            </li>
            <li>
              <Link to="/record/add">Add New</Link>
            </li>
          </ul>
        </nav>  
        <Routes>
          <Route exact path="/record/add" element= {<Create/>} >
          </Route>
          <Route exact path="/record/edit" element= {<Edit />} >
          </Route>
          <Route exact path="/record/view" element= {<RecordList />} >
          </Route>
        </Routes> 
      </div>
    </Router>   
  );
 };
  
 export default App;
 
