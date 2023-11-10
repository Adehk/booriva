import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
