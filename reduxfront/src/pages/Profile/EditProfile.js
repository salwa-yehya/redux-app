import React, { useEffect, useState } from 'react';
import './profile.css';
// import NavBar from "../../components/Navbar/Navbar";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditProfile() {


    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs , setInputs] = useState("");
    const [file, setFile] = useState(null);
    const [user , setUser] = useState([]);

    
    useEffect(()=>{
        getUser();
    } , [])

    function getUser(){
        axios.get(`http://localhost:80/reduxApp/phpback/users.php/${id}`)
        .then(response => {
            console.log(response.data);
            setUser(response.data);
        })
    }

    const handleEditUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs( {...inputs , [name]: value})
      }
  
      const handleEditUserSubmit  = async (e) => {
        e.preventDefault();
    
        const formEditData = new FormData();
  
        formEditData.append("fullname", inputs['fullname']);
        formEditData.append("email", inputs['email']);
        formEditData.append("password", inputs['password']);
        formEditData.append("file", file);
        try {
          const response = await axios.post(
            `http://localhost:80/reduxApp/phpback/editUserProfile.php/${id}`, formEditData
          );
          console.log(response.data);
          navigate(`/profile`);
        //   window.location.assign(`/profile/${id}`);
        } catch (error) {
          console.error(error);
        }
      };



  return (
    <>

{/* <NavBar /> */}

        
<div className='profileForm'>
    <h1>Edit User Info</h1>
    <form onSubmit={handleEditUserSubmit}>
    <label htmlFor="">Full Name</label>
      <input type="text" placeholder="name" name="fullname" defaultValue={user.fullname} onChange={handleEditUser} />

    <label htmlFor="">Email</label>
      <input type="number"  placeholder="Email"  name="email" defaultValue={user.email}  onChange={handleEditUser} />
    <label htmlFor="">Password</label>
      <input  type="password"  placeholder="Password" name="password" defaultValue={user.password} onChange={handleEditUser} />
      <br/>
      <input type="file" style={{border:'none',borderRadius:'0'}}  placeholder="image"   name="file" id="file"onChange={(e) => setFile(e.target.files[0])}/>
      <button type='submit'>Submit</button>
    </form>
   </div>
        
        
    </>
  )
}