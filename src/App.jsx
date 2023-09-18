import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modal from "./components/header/Modal";
import Header from "./components/header/Header";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modal" element={<Modal />} /> 
        <Route path="/header" element={<Header />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
