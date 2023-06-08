import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useUser } from "./context/UserContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Params } from "./pages/Params";
import { Query } from "./pages/Query";

const App = () => {
  const { isLogin } = useUser();

  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/" />;
  };

  const PublicRoute = ({ children }) => {
    return isLogin ? <Navigate to="/home" /> : children;
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/query"
            element={
              <PrivateRoute>
                <Query />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/params/:n"
            element={
              <PrivateRoute>
                <Params />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
