import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Show from "./pages/posts/Show";
import Index from "./pages/posts/Index";
import Create from "./pages/posts/Create";

import "./App.css";
import ErrorNotFound from "./pages/ErrorNotFound/ErrorNotFound";
import { useState } from "react";
import GlobalContext from "./Context/GlobalContext";

const API_BASE_URI = "http://localhost:3000/";

function App() {
  const [categories] = useState(["Dolci", "Primi", "Secondi"]);

  return (
    <>
      <GlobalContext.Provider value={{ categories, API_BASE_URI }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Route>

            <Route path="/posts">
              <Route path="" Component={Index}></Route>
              <Route path=":id" Component={Show}></Route>
              <Route path="create" Component={Create}></Route>
            </Route>

            <Route>
              <Route path="*" element={<ErrorNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;