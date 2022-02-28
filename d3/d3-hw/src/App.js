import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components2/WarningSign";
import MyBadge from "./components2/MyBadge";
import scifi from "../src/data/scifi.json";
import SingleBook from "./components2/SingleBook";
import BookList from "./components2/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign />
        <MyBadge text={"hello MF "} color={"success"} />
        <SingleBook book={scifi[3]} />
        <BookList book={scifi} />
      </header>
    </div>
  );
}

export default App;
