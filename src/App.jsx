import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Favorites from "./components/Header/Favorites/index";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "/src/scss/libs/_normalize.scss";
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import { useLocation } from 'react-router';
export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const location = useLocation();
  const hideHeaderPaths = ['/login', '/register']; // добавляем эти страницы в исключение, чтобы не отображался header
  return (
    <>
      <div className="container">
        <div>
          <SearchContext.Provider value={[searchValue, setSearchValue]}>
            {!hideHeaderPaths.includes(location.pathname) && <Header /> }
             {/* если в url лежат /login, или /register тогда не показывай <Header/> иначе отображай  */}
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="*" element={<NotFound/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/favorites" element={<Favorites />}/>
            </Routes>
          </SearchContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
