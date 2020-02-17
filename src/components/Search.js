import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'
import * as BookUtils from '../BookUtils'

class Search extends Component {

  state = {
    query: "",
    books: []
  }

  queryTimer = null;

  ChangeQuery = (value) =>{
    clearTimeout(this.queryTimer);
    this.setState({query: value});
    this.queryTimer= setTimeout(this.UpdateSearch, 250);

  }

  UpdateSearch = () => {

    if(this.state.query === ""){
      this.setState({ error: false, books: [] });
      return;
    }
 

    BooksAPI.search(this.state.query)
    .then(response => {
      let newList=[];
      let newError = false;
      console.log('x', this.props.selectedBooks)
      if(response === undefined || (response.error && response.error !== "empty query")){
        newError = true;
      } else if(response.length) {
        newList = BookUtils.MergShelfAndSearch(this.props.selectedBooks, response);
        
      }
      this.setState({error: newError, books:newList});
    });

  }
  componentWillReceiveProps = (props) =>{
    this.props = props;
    let newList =[];
    newList = BookUtils.MergShelfAndSearch(this.props.selectedBooks, this.state.books);
    this.setState({books: newList});

  }
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to= '/'>
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"
                onChange={(e) => this.ChangeQuery(e.target.value)}
                value= {this.state.query.value}/>

              </div>
              
            </div>
            
            <div className="search-books-results">
              { this.state.error && (
                <div className="search-error">There is a problem with your search</div>
              )}
              { !this.state.error && (
                <span className="search-count"> 
                  {this.state.books.length} books match your search
                </span>
              )}
              <ol className="books-grid">
                {this.state.books.map(book => (
                  <li key={book.id}>
                    <BookList book={book} ShelfChange={this.props.ShelfChange}/>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
        )
    }
}
export default Search