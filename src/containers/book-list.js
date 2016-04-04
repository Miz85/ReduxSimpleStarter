import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      if(this.props.activeBook && book.title === this.props.activeBook.title){
        return (
          <li
            key={book.title}
            className="list-group-item"
            style={{cursor: 'pointer', backgroundColor: '#ddd'}}
            onClick={() => this.props.selectBook(book)}>
            {book.title}
          </li>
        );
      }
      else {
        return (
          <li
            key={book.title}
            className="list-group-item"
            style={{cursor: 'pointer'}}
            onClick={() => this.props.selectBook(book)}>
            {book.title}
          </li>
        );
      }

    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { books, activeBook } = state;
  return { books, activeBook };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
