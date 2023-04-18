import { BrowserRouter , Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/LoginPage/LoginPage.js"
 import {SignupPage} from "../pages/SignUpPage/Signup"
 import {HomePage} from "../pages/HomePage/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
       <Route path="/home" element={<HomePage />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
