import "./App.css";
import LatestRealease from "./components/LatestRelease";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbo";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <LatestRealease />
      <MyFooter />
    </div>
  );
}

export default App;
