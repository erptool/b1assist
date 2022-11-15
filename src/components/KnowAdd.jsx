import React from "react";

function KnowAdd() {
    return (
    <div>
    <h6>Enter Title:</h6>
    <input type="text" placeholder="Enter title of the record"/>
    <h6>Enter Content of the record:</h6>
    <input type="text" placeholder="Enter content of the record"/>
    <br></br>
    <input type="file" placeholder="Attach"/>
    <br></br>
    <form method="post">
    <button type="submit">Submit</button>
    </form>
    
    </div>
    );
}

export default KnowAdd;