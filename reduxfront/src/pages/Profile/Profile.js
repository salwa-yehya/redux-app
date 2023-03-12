import React, { useEffect, useState } from 'react';
import './profile.css';
import NavBar from "../../components/Nav/Navbar";

import axios from 'axios';


export default function Profile() {

    const current_ID = 1;
    const [dataUsers,setDataUsers] = useState([]);
    console.log(dataUsers);
    useEffect(()=>{
        getDataUsers();
       
    },[]);

      // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {
    axios.get(`http://localhost:80/reduxApp/phpback/user.php/users/6`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}
    console.log(dataUsers);

  return (
    <>
    {dataUsers.map((item)=>{
    return(<span>{item.fullname}</span>)  
   })}
    </>
  )
}