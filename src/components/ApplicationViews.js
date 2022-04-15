import React from "react";
import { Route, Routes } from "react-router-dom";
import { BooksProvider } from "./books/BookDataProvider";
import { BookList } from "./books/BookList";
import {BookDetails} from "./books/BookDetails";
import { BookForm } from "./books/BookForm";
import {Home} from "./Home"




export const ApplicationViews = () => {
    return (
        <BooksProvider>
            <Routes>
            
                <Route exact path="/*" element={<Home />} />                
                <Route path="books/*" element={<BookList />} />                
                <Route path="/books/create/*" element={<BookForm />} />
                <Route path="books/edit/:BookId/*" element={<BookForm />} />
                <Route path="/books/detail/:BookId/*" element={<BookDetails />} /> 
                              
            </Routes>
        </BooksProvider>
    )}