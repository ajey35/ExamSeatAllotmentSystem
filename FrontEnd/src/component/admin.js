import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import Managment_form from "./managment_form";
function Loginform(){
  
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const users = [
      { id: "Admin-01", password: "pass123" },
      { id: "Admin-02", password: "pass456" },
      { id: "Admin-03", password: "pass789" },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedUser = users.find((user) => user.id === userId);
  
      if (selectedUser && selectedUser.password === password) {
        navigate("allotseat"); // Navigate to the management form page if the credentials are correct
      } else {
        alert("Invalid user ID or password.");
      }
    };

    return(
        <>
        <div className="p-4 border-gray-300  w-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:w-1/3 border-solid border-3 m-3 p-5  rounded-lg ">
          <label>
            Select User ID:
            <select
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full h-10 px-4 py-2 border border-gray-300"//
            > 
              <option value="" disabled>
                Select User ID
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.id}
                </option>
              ))}
            </select>
          </label>
  
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-4 py-2 border border-gray-300"
              placeholder="Enter Password"
              required
            />
          </label>
  
          <button type="submit" className="w-full h-10 bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
        </>
    )
}

function Admin() {
   
  
    return (
        <>
        
        <Routes>
        <Route path='/' element={<Loginform/>}></Route>
        <Route path='/allotseat' element={<Managment_form/>}></Route>
        <Route path="*" element={<h1> 404 page not found </h1>}></Route>
      </Routes>
      </>
    );
  }

  export default Admin;