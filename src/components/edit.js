import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   title: "",
   content: "",
   level: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     title: form.title,
     content: form.content,
     level: form.level,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div classtitle="form-group">
         <label htmlFor="title">title: </label>
         <input
           type="text"
           classtitle="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div classtitle="form-group">
         <label htmlFor="content">content: </label>
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
       <br />
 
       <div classtitle="form-group">
         <input
           type="submit"
           value="Update Record"
           classtitle="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}