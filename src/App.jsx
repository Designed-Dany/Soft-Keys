import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Favorites from "./components/Header/Favorites/index";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Form from './components/Form';

import "/src/scss/libs/_normalize.scss";

export const SearchContext = React.createContext();


function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
    {Form && <div className="container">
        <div>
          <SearchContext.Provider value={[searchValue, setSearchValue]}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </SearchContext.Provider>
        </div>
      </div>}
    </>
  );
}

export default App;
