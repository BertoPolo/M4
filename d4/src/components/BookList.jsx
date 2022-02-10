import books from "../data/horror.json";
import SingleBook from "../components/SingleBook";
import { Container, Row } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchInput: "",
  };
  handleChange = (value) => {
    this.setState({
      searchInput: value,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <input
              type="text"
              onChange={(e) => this.handleChange(e.target.value)}
              className="justify-content-center m-3"
              placeholder="write a fliter"
            />
          </Row>
        </Container>

        <Container>
          <Row>
            {books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.searchInput.toLowerCase())
              )
              .map((book) => (
                <SingleBook
                  key={book.asin}
                  title={book.title}
                  img={book.img}
                  price={book.price}
                  category={book.category}
                ></SingleBook>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
