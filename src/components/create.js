import React, { useState } from "react";
import { useNavigate } from "react-router";

 
export default function Create() {
 const [form, setForm] = useState({
   title: "",
   content: "",
   file: ""
 });

 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newNote = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newNote),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ title: "", content: "", file: ""});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className='container mb-3'>
     <h3>Create Note</h3>
     <form onSubmit={onSubmit}>
       <div className="mb-3">
         <label className="form-label" htmlFor="title">Title</label>
         <input
           className='form-control'
           type="text"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
           required
         />
       </div>
       <div>
         <label className="form-label" htmlFor="content">Content</label>
         <textarea
           rows='10'
           className='form-control'
           type="text"
           id="content"
           value={form.content}
           onChange={(e) => updateForm({ content: e.target.value })}
           required
         />
       </div>
       <div>
         <label className="form-label" htmlFor="file">Attach File(s)</label>
         <input
           className='form-control'
           type="file"
           id="file"
           value=""
           onChange={(e) => updateForm({ file: e.target.files})}
           multiple
         />
       </div>
       <div>
        <br></br>
         <input
           className='btn btn-primary' 
           type="submit"
           value="Create note"
         />
       </div>
       
     </form>
   </div>
 );
}

//<div className="mb-3" classtitle="form-group"> line47