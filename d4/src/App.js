import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      {/* <WarningSign message="Danger Alert"></WarningSign>
      <MyBadge string="test123" color="primary"></MyBadge> */}
      <MyBadge string={"asdasd"} />
      <BookList></BookList>
    </>
  );
}

export default App;
