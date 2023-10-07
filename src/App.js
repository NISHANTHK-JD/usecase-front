import "./App.css";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/layout/NavComponent/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import UpdateUser from "./components/users/UpdateUser";
import Home from "./components/layout/HomeComponent/Home";
import ApplyLoan from "./components/users/LoanComponent/ApplyLoan";
import ViewLoans from "./components/users/LoanComponent/ViewLoan/ViewLoan.jsx"

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loan" element={<ApplyLoan />} />
          <Route path="/viewloan" element={<ViewLoans />} />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
