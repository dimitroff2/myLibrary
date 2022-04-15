import React, { useState, createContext } from "react"

export const BooksContext = createContext()

export const BooksProvider = (props) => {
    const [books, setBooks] = useState([])
        //retrieving books from books json
        const getBooks = () => {
            return fetch("http://localhost:8088/books")
            .then(res => res.json())
            .then(setBooks)
        }
        //grabbing the id for the books
        const getBooksById = (id) => {
            return fetch(`http://localhost:8088/books/${id}?`)
                .then(res => res.json())
          }

        const addBook = eventObj => {
            return fetch("http://localhost:8088/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventObj)
            })
            .then(getBooks)
        }
        //to delete books out of the json file
        const deleteBook = bookId => {
            return fetch(`http://localhost:8088/books/${bookId}`, {
                method: "DELETE"
            })
                .then(getBooks)
        }
//to make changes to the book
        const updateBook = book => {
            return fetch(`http://localhost:8088/books/${book.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(book)
            })
              .then(getBooks)
          }

        return (
            <BooksContext.Provider value={{ 
                books, setBooks, getBooks, addBook, deleteBook, getBooksById, updateBook 
            }}>
                {props.children}
            </BooksContext.Provider>
        )

}