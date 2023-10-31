import "./App.css";
import Header from "../components/Header";
import HouseList from "../components/house/HouseList";

function App() {
  return (
    <div className="container">
      <Header subtitle="Making your dream home a reality" />
      <HouseList />
    </div>
  );
}

export default App;
