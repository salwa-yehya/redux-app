import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import "./CreatBook.css";
import './CreateBook.css'


export default function EditBook() {

    const navigate=useNavigate();
    const {id} =useParams();
    const [inputs , setInputs] = useState("");
    const [file, setFile] = useState(null);
    const [book , setBook] = useState([]);



    useEffect(()=>{
        getBook();

    },[]);

    const getBook = () => {
                axios.get(`http://localhost:80/reduxApp/phpback/BooksData/${id}`)
        .then((respone)=>{
            setBook(respone.data[0])
            console.log(respone.data[0]);
        })
    }
    const handleEditBook = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs( {...inputs , [name]: value})
      }

      const handleSubmit  = async (e) => {
        e.preventDefault();
    
        const formEditData = new FormData();
  
        formEditData.append("bookname", inputs['bookname']);
        formEditData.append("auther", inputs['auther']);
        formEditData.append("description", inputs['description']);
        formEditData.append("file", file);
      
        try {
          const response = await axios.post(
            `http://localhost:80/reduxApp/phpback/editBookProfile.php/${id}`, formEditData
          );
          console.log(response.data);
          navigate(`/book/${id}`)
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


     <input  name="bookname" placeholder="Book Name" type="text" id="text" defaultValue={book.bookname} onChange={handleEditBook}  />
     <input  name="auther" placeholder="Book Auther" type="text" id="text" defaultValue={book.auther} onChange={handleEditBook} />
     <input name="description"  placeholder="Book Description"  type="text" id="text"  defaultValue={book.description} onChange={handleEditBook} />
    <input type="file"  name="img" id="file" accept="image/*"  onChange={(e) => setFile(e.target.files[0])} hidden/>
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