import React, { useContext, useEffect, useState } from "react"
import { BooksContext } from "./BookDataProvider"
import "./Books.css"
import {useParams, useNavigate} from "react-router-dom"

export const BookDetails = () => {
    const {getBooksById, deleteBook} = useContext(BooksContext)
    const [book, setBooks] = useState({})
    const {BookId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect", BookId)
        getBooksById(BookId)
        .then((response) => {
        setBooks(response)
        })
        }, [])

    const handleRelease = () => {
        deleteBook(book.id)
        .then(() => {
        navigate("/books")
          })
}

return (
    <section className="book">
      <div className="book__title">{book.title}</div>
        <div className="book__author">{book.author}</div>
        <div className="book__genre">{book.genre}</div>
        <div className="book__genre">{book.signed}</div>
        <div className="book__genre">{book.read}</div>
        <div className="book__owned">{book.owned}</div>
    <button className="btn btn-primary" onClick={handleRelease}>Delete Book</button>
      <button className="btn btn-primary" onClick={() => {navigate(`/books/edit/${book.id}`)}}>Edit</button>
    </section>
  )
}