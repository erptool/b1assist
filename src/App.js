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
              <Link to="/"><RecordList /></Link>
            </li>
            <li>
              <Link to="/"><Edit /></Link>
            </li>
            <li>
              <Link to="/record/add">Add New</Link>
            </li>
          </ul>
        </nav>  
        <Routes>
          <Route exact path="/record/add" element= {<Create/>} >
          </Route>
        </Routes> 
      </div>
    </Router>   
  );
 };
  
 export default App;
/*function App() {
  return (
    <div >
      <header className="App-header">
        <h3>
          Knowledge Base
        </h3>
      </header>
      <KnowAdd />
      {/*  *//*}
</div>
  );
}*/

 
