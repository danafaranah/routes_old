import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Navbar = () => {
  const { isLogin, setIsLogin } = useUser();

  const Exit=()=>{
    setIsLogin(false)
    localStorage.setItem("login", false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            {isLogin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/home"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/about"}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger " onClick={()=>Exit()}>
                    Exit
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link">
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
