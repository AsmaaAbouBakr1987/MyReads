import React from 'react'
import ChangeShelf from './ChangeShelf'

const BookList = (props) => {
    const authors = props.book.authors && props.book.authors.join(' | ');
    
    return(
        
                      
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks &&
              props.book.imageLinks.smallThumbnail})` }}></div>
            
                <ChangeShelf ShelfChange={props.ShelfChange} book= {props.book} />
            
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
                      
                      
                    
    )
}

export default BookList;