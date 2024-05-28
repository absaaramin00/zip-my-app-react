import "./App.css";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navabar from "./components/Navabar";
import Footer from "./components/Footer";
import UserDetail from "./pages/UserDetail";
import TodoList from "./pages/TodoList";

export const UserContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Navabar />
      <UserContext.Provider value={"Imtinan"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="/to-do-list" element={<TodoList />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
