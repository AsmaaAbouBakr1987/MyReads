import React, { Component } from 'react'
import BookShelves from './BookShelves'
import { Link } from 'react-router-dom';

class BookCase extends Component {


    UpdateShelves = () => {
        
        const Current = {

            name: "CurrentlyReading",
            books : this.props.books.filter( book => book.shelf === 'currentlyReading')
        };
        

        const WantTo = {

            name: "WantToRead",
            books : this.props.books.filter( book => book.shelf === 'wantToRead')
        };
        const Read = {

            name: "Read",
            books : this.props.books.filter( book => book.shelf === 'read')
        };

        let x= [Current, WantTo, Read];
        console.log ('asmaa', x);
        return x;
        

    }

    


    render (){

        let Shelves = [];
        Shelves = this.UpdateShelves();
        /*console.log('pla pla pla', Shelves);*/

        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                {Shelves.map( shelf => <BookShelves key= {shelf.name} shelf={shelf} ShelfChange={this.props.ShelfChange}/> )}
                
            </div>
            </div>
            <div className="open-search">
            
            <Link to='/search' >
                <button>Add a book</button>
            </Link>
            </div>
        </div>
        )
    }
}    
        

export default BookCase;