import "./App.css";
import Header from "../components/Header";
import HouseList from "../components/house/HouseList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HouseDetail from "../components/house/HouseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Making your dream home a reality" />
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/house/:id" element={<HouseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
