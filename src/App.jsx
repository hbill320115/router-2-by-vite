// import { Routes,Route } from "react-router-dom";
 //引入路由規則
 import {Navbar} from "./pages"
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mt-3">
        <Outlet/>
      </div>
    </div>
  );
}
export default App;
