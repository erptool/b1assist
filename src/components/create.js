import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   title: "",
   content: "",
   level: "",
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
   const newIdea = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newIdea),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ title: "", content: "", level: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div classtitle="form-group">
         <label htmlFor="title">title</label>
         <input
           type="text"
           classtitle="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div classtitle="form-group">
         <label htmlFor="content">content</label>
         <input
           type="text"
           classtitle="form-control"
           id="content"
           value={form.content}
           onChange={(e) => updateForm({ content: e.target.value })}
         />
       </div>
       <div classtitle="form-group">
         <div classtitle="form-check form-check-inline">
           <input
             classtitle="form-check-input"
             type="radio"
             title="contentOptions"
             id="contentIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="contentIntern" classtitle="form-check-label">Intern</label>
         </div>
         <div classtitle="form-check form-check-inline">
           <input
             classtitle="form-check-input"
             type="radio"
             title="contentOptions"
             id="contentJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="contentJunior" classtitle="form-check-label">Junior</label>
         </div>
         <div classtitle="form-check form-check-inline">
           <input
             classtitle="form-check-input"
             type="radio"
             title="contentOptions"
             id="contentSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="contentSenior" classtitle="form-check-label">Senior</label>
         </div>
       </div>
       <div classtitle="form-group">
         <input
           type="submit"
           value="Create person"
           classtitle="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}