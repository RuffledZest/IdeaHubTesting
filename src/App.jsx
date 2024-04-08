import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "../HomePage";
import LoginPage from "./Pages/LoginPage";
import DashboardInn from "./Pages/DashboardInn";
import DashboardInv from "./Pages/DashboardInv";
import SignupPage from "./Pages/SignupPage";

import RegistrationPage from "./Pages/RegistrationPage";



function App() {
  return <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboardInnovator" element={<DashboardInn/>} />
      <Route path="/dashboardInvestor" element={<DashboardInv/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/post" element={<RegistrationPage/>} />
      <Route path="*" element={<div>404 Not Found</div>} />



    </Routes>




  </BrowserRouter>

}


export default App;