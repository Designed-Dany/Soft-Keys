import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Auth from "./components/Header/Auth";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "/src/scss/libs/_normalize.scss";

function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <>
      <div className="container">
        {isLogin ? (
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        ) : (
          <Auth />
        )}
      </div>
    </>
  );
}

export default App;
