import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/index";
import "/src/scss/libs/_normalize.scss";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
