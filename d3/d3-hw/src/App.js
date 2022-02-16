import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <WarningSign message="hello im da king" />
      <MyBadge text="haha! maybe in your dreams" color="secondary" />
      <SingleBook />
    </div>
  );
}

export default App;
