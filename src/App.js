import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Outlet></Outlet>
      </header>
    </div>
  );
}

export default App;
