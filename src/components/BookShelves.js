import React from 'react'
import BookList from './BookList'

const BookShelves = (props) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.shelf.books.map( book => (
                            <li key= {book.id}>
                                <BookList book= {book} ShelfChange={props.ShelfChange}/>
                            </li>
                        ))    
                    }
                </ol>
                
            </div>
        </div>
    )

}

export default BookShelves;