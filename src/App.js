import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'
import Search from './components/Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  

  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books
    }));
  }


  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);
    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  };
  
  searchForBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase books= {this.state.books}  ShelfChange= {this.moveBook}/>
        )} />
        
        <Route exact path='/search' render={() => (
          <Search selectedBooks={this.state.books} ShelfChange= {this.moveBook} />
        )} />
        
      </div>
      
    )
  }
}

export default BooksApp
