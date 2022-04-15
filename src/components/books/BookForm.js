import React, { useContext, useEffect, useState } from "react"
import { BooksContext } from "./BookDataProvider"
import "./Books.css"
import {useParams, useNavigate} from "react-router-dom"

export const BookForm = () => {
    const {addBook, getBooksById, updateBook, getBooks} = useContext(BooksContext)
    const [bookState, setBookState] = useState(
        {
            userId: +localStorage.getItem("NutShell_User"),
            title: "",
            author: "",
            genre: "",
            signed: false,
            read: false,
            owned: false
            
            
        })
        

        const [isLoading, setIsLoading] = useState(false);
        const {BookId} = useParams();
        const navigate = useNavigate();


        const handleControlledInputChange = (event) => {
            const newBookState = { ...bookState } 
            newBookState[event.target.name] = event.target.value
            setBookState(newBookState)
          }
          const handleControlledInputChecked = (event) => {
            const newBookState = { ...bookState } 
            newBookState[event.target.name] = event.target.checked
            setBookState(newBookState)
          }

          
          const handleSaveEvent = () => {
            if (parseInt(bookState.id) === 0) {
              window.alert("Save a Book")
            } else {
              setIsLoading(true);
            
              if(BookId){
                updateBook({
                  id : +bookState.id,
                  title: bookState.title,
                  author: bookState.author,
                  genre: bookState.genre,
                  signed: Boolean(bookState.signed),
                  read: Boolean(bookState.read),
                  owned: Boolean(bookState.owned)
                  
                  
                })
                .then(() => navigate(`/books/detail/${bookState.id}`))
              } else {
                //Post Add
                addBook({
                  
                  title: bookState.title,
                  author: bookState.author,
                  genre: bookState.genre,
                  signed: Boolean(bookState.signed),
                  read: Boolean(bookState.read),
                  owned: Boolean(bookState.owned)
                  
                  
                })
                .then(() => navigate("/books"))
              }
            }
          }
      

          useEffect(() => {
        
            if(BookId){
            getBooksById(BookId)
              .then(book => {
                setBookState(book)
                setIsLoading(false)
              })
            } else {
              setIsLoading(false)
            }
         
        }, [])

        return(
          <form className="bookForm" >
          <h2 className="bookForm__title">Add Book</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Book Title:</label>
                  <input type="text" id="title" name="title" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="Title" 
                  defaultValue={bookState.title}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Author:</label>
                  <input type="text"  name="author" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="author" 
                  defaultValue={bookState.author}/>
              </div>

              </fieldset>

              <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Genre:</label>
                  <input type="text" name="genre" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="genre" 
                  defaultValue={bookState.genre}/>
              </div>      

              </fieldset>

              <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Signed:
                  <input type="checkbox" id="signed" name="signed" 
                  checked={bookState.signed}
                  onChange={handleControlledInputChecked} required autoFocus 
                  placeholder="signed" 
               />
                  </label>
              </div>      

              </fieldset>

              <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Read:
                  <input type="checkbox" id="read" name="read" 
                  onChange={handleControlledInputChecked} required autoFocus 
                  placeholder="read" 
                  defaultValue={bookState.read}/>
                  </label>
              </div>      

              </fieldset>

              <fieldset>
              <div className="form-group">
                  <label className="control-label" htmlFor="name">Owned:
                  <input type="checkbox" id="owned" name="owned" 
                  onChange={handleControlledInputChecked} required autoFocus 
                  placeholder="owned" 
                  defaultValue={bookState.owned}/>
                  </label>
              </div>      

              </fieldset>

              <button className="btn btn-primary"
          disabled ={isLoading}
            onClick={book => {
              book.preventDefault(
              handleSaveEvent()
              )
            }}>
            Save Book
          </button>




          </form>
        )

        
}