
import React, { useContext, useEffect} from "react";
import { BooksContext } from "./books/BookDataProvider";
import Pic from "./Pic.jpg"
import "./HomePage.css"
 
export const Home  = (book) => {
  const {books, getBooks} = useContext(BooksContext)

    useEffect(()=>{
      
        getBooks()
    }, [])

  return (
   
      <div>
        <div className="Pic">
         
          <img src={Pic}/>
          </div>
        <div className="Welcome"><h2><b>WELCOME TO MY LIBRARY</b></h2>
        <p><i>A place to keep track of your library.</i></p></div>

        <div className="Wishlist">
        <h2>WishList</h2>

        
        {books.filter(book => book.owned == false).map(filteredOwned => (
        <li >{filteredOwned.title}</li> ))}
        </div>

        <div className="Favorite"><h2>Favorites</h2>
        
        
      {books.slice(0,5).map(filteredFav => (
        <li>
          {filteredFav.title}
        </li>
      ))}
    </div>
      
 
        
      </div>
    );
    
}

