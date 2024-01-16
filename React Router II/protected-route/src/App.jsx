import { useContext } from "react";
import { UserContext } from "./context/userContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Administracion from "./components/Administracion/Administracion";
import Login from "./components/Login/Login";

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
