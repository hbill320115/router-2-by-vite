import { NavLink } from "react-router-dom"; //NavLink有連結active效果

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* isActive 判斷連結是否被選取 */}
            {/* 使用函式回傳style的顏色 */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/"
              style={({isActive})=>{
                return {
                  color: isActive ? "red" : ""
                }
              }}>Home</NavLink> 
            </li>
            {/* --------------------------------- */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">關於我</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/album">相簿</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/swiperPage">輪播</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
