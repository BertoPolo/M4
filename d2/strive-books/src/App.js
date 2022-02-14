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

fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/"),
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDQ0OTkxNDUsImV4cCI6MTY0NTcwODc0NX0.8h2PlkIIIJAqbPtyBA0tLWSW3AOgUbUE1WX58kR_UK4",
    },
  };
