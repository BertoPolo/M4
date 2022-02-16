import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import scifiBook from "./scifi.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign message="hello im da king" />
        <MyBadge text="haha! maybe in your dreams" color="secondary" />
        <SingleBook book={scifiBook[0]} />
        <BookList books={scifiBook} />
      </header>
    </div>
  );
}

export default App;
