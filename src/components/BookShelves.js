import React from 'react'
import BookList from './BookList'

const BookShelves = () => {

    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookList />
                  </div>
                </div>
    )

}

export default BookShelves;