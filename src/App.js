import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import './App.css';
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Navbar from "./components/navbar";

//import KnowAdd from './components/KnowAdd';

const App = () => {
  return (
    <div>
    <h1>This is a render test</h1>
      <Navbar /> 
      {/*<Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes> */}
    </div>
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

 
