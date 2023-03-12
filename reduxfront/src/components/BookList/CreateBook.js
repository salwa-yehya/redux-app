import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateBook.css'

export default function CreateBook() {

        // const current_ID = JSON.parse(localStorage.getItem('id'));

        const current_ID = 1 ;
const navigate = useNavigate();
    const [bookname, setTitle] = useState("");
    const [auther, setAuther] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bookname", bookname);
    formData.append("auther", auther);
    formData.append("description", description);
    formData.append("user_id", current_ID);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:80/reduxApp/phpback/books.php",
        formData
      );
      console.log(response.data);
      navigate('/book');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
        
       {/*  */}
<div id= "formm">

{/*  Button Add to Group */}
  <h2 style={{color:"white"}}>Create Book</h2>
  <br />


  
   {/*  Form Add to Group */}

   <section className="section_form">
   <form id="consultation-form" className="feed-form" onSubmit={handleSubmit}>


     <input  name="bookname" placeholder="Book Title" type="text" id="text" value={bookname} onChange={(e) => setTitle(e.target.value)} />
     <input  name="auther" placeholder="Book Auther" type="text" id="text" value={auther} onChange={(e) => setAuther(e.target.value)} />
     <input name="description"  placeholder="Book Description"  type="text" id="text" value={description} onChange={(e) => setDescription(e.target.value)} />
    <input type="file"  name="img" id="file" accept="image/*"  onChange={(e) =>setFile(e.target.files[0])} hidden/>
    <label className="label" htmlFor="file">Choose Photo</label>
    {/* <label className="label" htmlFor="file"><IoMdPhotos size={20}/>Choose Photo</label> */}


    <br/>

    <button className="BtnAdd"> Create Group </button>
   </form>
 </section>
</div>

    </>
  )
}