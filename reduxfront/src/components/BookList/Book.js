import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (props) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {require(`../../images/${props.Books.image}`)} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${props.Books.id}`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span> {props.Books.bookname}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{props.Books.auther}</span>
        </div>


      </div>
    </div>
  )
}

export default Book