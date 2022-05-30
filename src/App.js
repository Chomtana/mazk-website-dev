import MazkMainPage from "./Main_Page/Mazk_MainPage";
//import MintPage from "./Mint_Page/Mint_Page.js";
import CheckPage from "./Check_Page/Check_Page.js";
import {BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom"; 

export default function App() {
  return (
    <div  style={{width:"100%",height:"100%"  }} >
      <Router>
        <Routes>
          <Route path='/' element={ <MazkMainPage /> } />
          <Route path='/checkwl' element={ <CheckPage /> } />
          <Route path="*" element={<Navigate to="/" /> } />
        </Routes>
      </Router>
    </div>
  );
}