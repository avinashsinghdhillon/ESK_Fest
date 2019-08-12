import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import BookBtn from "../../components/BookBtn";

class Saved extends Component {
  state = {
    books: [],
    target: "",
    noResults: false
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            books: res.data,
            target: "_blank"
          });
        } else {
          this.setState({
            noResults: true
          });
        }

      })
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.noResults) {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-4">Google Books Search</h1>
            <p className="lead">Search for and Save Books of Interest.</p>
            <hr className="my-4" />
            <p className="lead">
              <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
              <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
            </p>
          </Jumbotron>
          <br /><br />
          <Container>
            <Link to="/">You have no saved books. Click here to find some.</Link>
          </Container>
        </div>
      )
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
            <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
          </p>
        </Jumbotron>
        <br /><br />
        <Container>
          <h2>Saved Books</h2>
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <div className="date-div">
                  <a
                    key={book._id + "link"}
                    href={book.link}
                    target={this.state.target}
                  >
                    {book.title}
                  </a>
                  <p>Written By {book.author}</p>
                  <p>
                  <img align="left" style={{paddingRight:10}}
                    src={book.image} alt="new"
                  />
                    {book.description}
                  </p>
                </div>
                <div className="book-btn-div">
                  <BookBtn
                    key={book._id + "btn"}
                    btntype="info"
                    id={book._id}
                    disabled={book.link === "/"}
                    onClick={() => this.deleteBook(book._id)}
                  >
                    DELETE
                </BookBtn>
                </div>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    );
  }
}

export default Saved;
