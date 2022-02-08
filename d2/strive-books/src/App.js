import "./App.css";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbo";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
