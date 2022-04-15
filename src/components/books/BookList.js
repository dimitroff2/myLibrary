import React, { useContext, useEffect, useState } from "react"
import { BooksContext } from "./BookDataProvider"
import {BookCard} from "./BookCard"
import "./Books.css"
import {useNavigate} from "react-router-dom"


export const BookList = () => {
    const {books, getBooks} = useContext(BooksContext)

    useEffect(()=>{
      console.log("Books show up!")
        getBooks()
    }, [])
    
    const navigate = useNavigate()

    return (
        <>
          <h1>My Books</h1>
          
          <div className="books">
          {
            books.map(book => {
              return <BookCard key={book.id} book={book} />
            })
          }
          </div>
        </>
    )
}

