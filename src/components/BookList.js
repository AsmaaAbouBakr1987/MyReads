import React from 'react'
import ChangeShelf from './ChangeShelf'

const BookList = (props) => {
    
    return(
        
                      
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks &&
              props.book.imageLinks.smallThumbnail})` }}></div>
            
                <ChangeShelf ShelfChange={props.ShelfChange} book= {props.book} />
            
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.author}</div>
        </div>
                      
                      
                    
    )
}

export default BookList;