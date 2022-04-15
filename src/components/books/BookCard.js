
import "./Books.css"
import {useParams, useNavigate} from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { BooksContext } from "./BookDataProvider"


export const BookCard = ({book})=> {

    const navigate = useNavigate();
//to make the details button direct
    const handleClick = () => {
        console.log('Are we printing?')
        navigate(`/books/detail/${book.id}`)
      } 
      
      //the book card to make info show up for the individual books
    return(
    <section className="book">
        
        <h2>{ book.title }</h2>
        <div className="book__author"><h4>{book.author}</h4></div>
        <div className="book__genre"><i>genre: </i>{book.genre}</div>
        <div className="book__signed"><i>signed: </i>{book.signed ? "SIGNED!!!" : "not signed"}</div>
        <div className="book__read"><i>read: </i>{book.read ? "READ!" : "to be read"}</div>
        <div className="book__owned"><i>owned: </i>{book.owned ? "OWN IT!" : "not owned"}</div>
        
        <button className="btn btn-primary" onClick={handleClick}>Details</button>
        
    </section>
    )
}