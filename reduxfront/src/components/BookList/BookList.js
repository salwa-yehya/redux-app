import React, { useEffect, useState } from 'react'
import Book from './Book';
import "./BookList.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


const BookList = () => {
  const[Books,setBooks]=useState([]);

  useEffect(()=>{
    getBooks();

          },[])

          const getBooks =()=>{
            axios.get("http://localhost/reduxApp/phpback/books.php")
          
            .then((res)=>{
                console.log(res.data)
                setBooks(res.data)
            })
       } 



  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          {/* <h2>{resultTitle}</h2> */}
          <h2>All Books</h2>
          <div>
            <Link to="/createBook">
                <button >Add book</button>
            </Link>
          </div>
        </div>
        <div className='booklist-content grid'>
        {(Books == []) ?
                  <></>
                  :
                  Books.map((book) =>(
                    <Book   key = {book.id} Books ={book} />
                    ))}
        
                
            
        </div>
      </div>
    </section>
  )
}

export default BookList