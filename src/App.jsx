import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/detail/:id" exact element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
